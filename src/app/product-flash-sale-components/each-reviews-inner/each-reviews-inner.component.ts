import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { ProductFlashSaleReview } from '../../login-and-register-user/interface/product-flash-sale-review';

interface allLikesReviews {
  id: string;
  productFlashSaleReviewsId: string;
  userId: string;
  alreadyExistLikeReview: boolean;
}

@Component({
  selector: 'app-each-reviews-inner',
  templateUrl: './each-reviews-inner.component.html',
  styleUrl: './each-reviews-inner.component.scss'
})
export class EachReviewsInnerComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() product!: ProductFlashSaleReview;
  productVideUrl: string | null = null;
  productImageUrl: string | null = null;
  alreadyClickedVideo = false;
  showSvgPlay = true;

  @ViewChild('videoReviews') videoReviews!: ElementRef<HTMLVideoElement>;
  @ViewChild('containerImgVideoReviews') containerImgVideoReviews!: ElementRef<HTMLDivElement>;
  @ViewChildren('containerImgAndVideoReviews') containerImgAndVideoReviewsS!: QueryList<ElementRef<HTMLDivElement>>;

  mouseEnterSvgPlayVideo = true;
  countStarArray: number[] | null = null;
  emptyStars: unknown[] = [];
  dateCreationString: string | null = null;

  imgDataUrlString = "";
  durationFormatted = "";
  allLikesReviews: allLikesReviews[] = [];
  alreadyClickedImage = false;
  settimeOutAny!: number;

  @ViewChild('carouselCustom') carouselCustom!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowLeft') containerArrowLeft!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowRight') containerArrowRight!: ElementRef<HTMLDivElement>;
  valueBaseToSumScroll = 395;

  arrayImgAndVideo: string[] | null = null;

  ngOnInit(): void {
    const arrayImgAndVideo = this.product.imgAndVideoReviewsProduct;

    const indexToDuplicate = 2; // Por exemplo, duplicar o item no índice 2

  // Verificar se o índice é válido
  if (indexToDuplicate >= 0 && indexToDuplicate < arrayImgAndVideo.length) {
    const itemToDuplicate = arrayImgAndVideo[indexToDuplicate];
    arrayImgAndVideo.splice(indexToDuplicate + 1, 0, itemToDuplicate); // Insere após o item original
  }

  this.arrayImgAndVideo = arrayImgAndVideo;

    const dateCreation = new Date(this.product.creationDate);

    const fullYear = dateCreation.getFullYear();

    const month = dateCreation.getMonth() + 1;  // Ajuste para mês correto
    const monthString = month.toString().padStart(2, '0'); // Garantir dois dígitos

    const day = dateCreation.getDate();
    const dayString = day.toString().padStart(2, '0');

    const hours = dateCreation.getHours();
    const hoursString = hours.toString().padStart(2, '0');

    const minutes = dateCreation.getMinutes();
    const minutesString = minutes.toString().padStart(2, '0');

    // Formatação da data
    const dateCreationString = `${fullYear}-${monthString}-${dayString} ${hoursString}:${minutesString}`;

    this.dateCreationString = dateCreationString;

    const countStarArray = [];

    for (let i = 1; i <= this.product.starQuantity; i++) {
      countStarArray.push(i);
    }

    // setCountStarArray(countStarArray);
    this.countStarArray = countStarArray;

    if(this.countStarArray){
      const maxStars = 5;
      this.emptyStars = Array.from({ length: maxStars - this.countStarArray.length });
    }

    (async () => {
      for (const element of this.product.imgAndVideoReviewsProduct) {
        if (element.includes('/video/')) {
          const imgDataUrlString = await this.functionImg(element);

          this.imgDataUrlString = imgDataUrlString;

          this.containerImgVideoReviews.nativeElement.style.backgroundImage = `url(${imgDataUrlString})`;
        }
      }
    })();
  }

  ngAfterViewInit(): void {
    clearTimeout(this.settimeOutAny);

    this.settimeOutAny = setTimeout(() => {
      if(typeof window === 'undefined')return;

      const scrollElement = this.carouselCustom.nativeElement;
      const containerLeft = this.containerArrowLeft.nativeElement;
      const containerRight = this.containerArrowRight.nativeElement;

      const scrollLeft = () => {
        scrollElement?.scrollBy({ left: -this.valueBaseToSumScroll, behavior: 'auto' });
      };
      const scrollRight = () => {
        scrollElement?.scrollBy({ left: this.valueBaseToSumScroll, behavior: 'auto' });
      };

      const updateArrowsVisibility = () => {
        if (scrollElement) {
          let maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

          if (maxScrollLeft === 0) {
            maxScrollLeft = 10;
          }

          containerLeft!.style.display = scrollElement.scrollLeft > 0 ? 'flex' : 'none';
          containerRight!.style.display = scrollElement.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
        }
      };

      containerLeft?.addEventListener('click', scrollLeft);
      containerRight?.addEventListener('click', scrollRight);
      scrollElement?.addEventListener('scroll', updateArrowsVisibility);
      window.addEventListener('resize', updateArrowsVisibility);

      updateArrowsVisibility();
    }, 100)as unknown as number;
  }

  functionImg = async (product: string): Promise<string> => {
    // Cria elementos <video> e <canvas> dinamicamente

    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    return new Promise((resolve, reject) => {
      video.src = product;
      video.crossOrigin = 'anonymous'; // Permite acesso a vídeos externos
      video.currentTime = 2; // Define o tempo do frame desejado (1 segundo)

      video.addEventListener('loadeddata', () => {
        video.pause();

        const durationFormatted = this.formatTime(video.duration);
        // setDurationFormatted(durationFormatted);
        this.durationFormatted = durationFormatted;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Desenha o frame no canvas
        if (context) {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
        }

        // Converte o frame para uma URL de imagem em base64
        const imgDataUrl = canvas.toDataURL('image/png');
        resolve(imgDataUrl); // Retorna a string base64
      });

      video.addEventListener('error', (e) => reject(e));
    });
  };

  formatTime = (timeInSeconds: number) => {
    // const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    // return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
    //   .toString()
    //   .padStart(2, '0')}`;
    return `${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  onClickContainerVideoReviews = () => {
    if (this.videoReviews.nativeElement === null) return;

    const video = this.videoReviews.nativeElement;
    if (this.mouseEnterSvgPlayVideo) return;

    if (video) {
      if (video.paused) {
        video.play();

        // setShowSvgPlay(false);
        this.showSvgPlay = false;
      } else {
        video.pause();
        // setShowSvgPlay(true);
        this.showSvgPlay = true;
        // setMouseEnterSvgPlayVideo(true);
        this.mouseEnterSvgPlayVideo = true;
      }
    }
  };

  onClickContainerSvgPlayVideo = () => {
    if (this.videoReviews.nativeElement === null) return;

    const video = this.videoReviews.nativeElement;
    // setMouseEnterSvgPlayVideo(false);
    this.mouseEnterSvgPlayVideo = false;

    if (video) {
      if (video.paused) {
        video.play();
        // setShowSvgPlay(false);
        this.showSvgPlay = false;
      } else {
        video.pause();
        // setShowSvgPlay(true);
        this.showSvgPlay = true;
      }
    }
  };

  funcToScroll = (valueScroll: number) => {
    if(typeof window === 'undefined')return;

    const scrollElement = this.carouselCustom.nativeElement;
    const containerLeft = this.containerArrowLeft.nativeElement;
    const containerRight = this.containerArrowRight.nativeElement;

    scrollElement?.scrollBy({ left: valueScroll, behavior: 'auto' });

    const updateArrowsVisibility = () => {
      if (scrollElement) {
        let maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

        if (maxScrollLeft === 0) {
          maxScrollLeft = 10;
        }

        containerLeft!.style.display = scrollElement.scrollLeft > 0 ? 'flex' : 'none';
        containerRight!.style.display = scrollElement.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
      }
    };

    scrollElement?.addEventListener('scroll', updateArrowsVisibility);
    window.addEventListener('resize', updateArrowsVisibility);

    updateArrowsVisibility();
  }

  lastIndexClicked = 0;

  onClickVideoReviews = (productVideUrl: string, containerImgVideoReviewsMain: HTMLDivElement, i: number) => {
    const computedStyle = window.getComputedStyle(containerImgVideoReviewsMain);

    const valueScroll = (i - this.lastIndexClicked) * this.valueBaseToSumScroll;

    this.funcToScroll(valueScroll);

    this.lastIndexClicked = i;

    if(computedStyle.borderColor === "rgba(0, 0, 0, 0)"){
      this.containerImgAndVideoReviewsS.forEach((el) => {
        el.nativeElement.style.border = "2px solid rgba(0, 0, 0, 0)";
      });

      this.productVideUrl = productVideUrl;
      containerImgVideoReviewsMain.style.border = '2px solid rgb(255, 0, 0)';
      containerImgVideoReviewsMain.style.padding = "2px 2px";
    }else {
      this.productVideUrl = null;
      containerImgVideoReviewsMain.style.border = '2px solid rgba(0, 0, 0, 0)';
      containerImgVideoReviewsMain.style.padding = "0px 0px";
    }

    this.productImageUrl = null;
    this.alreadyClickedVideo = true;
    this.alreadyClickedImage = false;
  };

  onClickImageReviews = (productImageUrl: string, containerImgReviews: HTMLDivElement, i: number) => {
    const computedStyle = window.getComputedStyle(containerImgReviews);

    const valueScroll = (i - this.lastIndexClicked) * this.valueBaseToSumScroll;

    this.funcToScroll(valueScroll);
    // CONTINUAR ARRUMANDO ESSE SCROLL AMANHA E REVE A LOGICA
    this.lastIndexClicked = i;

    if(computedStyle.borderColor === "rgba(0, 0, 0, 0)"){
      this.containerImgAndVideoReviewsS.forEach((el) => {
        el.nativeElement.style.border = "2px solid rgba(0, 0, 0, 0)";
      });

      this.productImageUrl = productImageUrl;
      containerImgReviews.style.border = '2px solid rgb(255, 0, 0)';
      containerImgReviews.style.padding = "2px 2px";
    }else {
      this.productImageUrl = null;
      containerImgReviews.style.border = '2px solid rgba(0, 0, 0, 0)';
      containerImgReviews.style.padding = "0px 0px";
    }

    this.productVideUrl = null;
    this.alreadyClickedVideo = false;
    this.alreadyClickedImage = true;
  }

  onClickContainerImageReviews = () => {
    console.log();
  }

  onClickContainerLike = () => {
    console.log();
  }

  onMouseEnterSvgPlayVideo = () => {
    // setMouseEnterSvgPlayVideo(true);
  };

  onMouseLeaveSvgPlayVideo = () => {
    // setMouseEnterSvgPlayVideo(false);
    this.mouseEnterSvgPlayVideo = false;
  };

  onClickArrowLeft(){
    //
  }

  onClickArrowRight(){
    //
  }

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutAny);
  }
}
