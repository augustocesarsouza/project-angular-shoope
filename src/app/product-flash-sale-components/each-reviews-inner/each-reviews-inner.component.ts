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
  settimeOutAny!: number;

  @ViewChild('carouselCustom') carouselCustom!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowLeft') containerArrowLeft!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowRight') containerArrowRight!: ElementRef<HTMLDivElement>;
  valueBaseToSumScroll = 395;

  arrayImgAndVideo: string[] | null = null;
  showImgsArray = false;

  ngOnInit(): void {
    console.log(this.product);

    const arrayImgAndVideo = this.product.imgAndVideoReviewsProduct;
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
  }

  ngAfterViewInit(): void {
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

  functionImg = async (product: string): Promise<string> => {
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

  onClickContainerSvgPlayVideo = () => {
    if (this.videoReviews.nativeElement === null) return;

    // const video = this.videoReviews.nativeElement;
    this.showSvgPlay = !this.showSvgPlay;

    // if (video) {
    //   if (video.paused) {
    //     video.play();
    //     this.showSvgPlay = false;
    //   } else {
    //     video.pause();
    //     this.showSvgPlay = true;
    //   }
    // }
  };

  funcToScroll = (valueScroll: number, behavior: ScrollBehavior = 'smooth') => {
    if(typeof window === 'undefined')return;

    const scrollElement = this.carouselCustom.nativeElement;
    const containerLeft = this.containerArrowLeft.nativeElement;
    const containerRight = this.containerArrowRight.nativeElement;

    scrollElement?.scrollBy({ left: valueScroll, behavior: behavior });

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

  funcScrollContainerImgAndVideo = () => {
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
  }

  wasClickedOneTimeIndexGreaterThanOne = false;

  onClickVideoAndImageReviews = (productVideUrl: string, containerImgVideoReviewsMain: HTMLDivElement, i: number) => {
    const computedStyle = window.getComputedStyle(containerImgVideoReviewsMain);

    const valueScroll = (i - this.lastIndexClicked) * this.valueBaseToSumScroll;

    this.lastIndexClicked = i;

    if(computedStyle.borderColor === "rgba(0, 0, 0, 0)"){
      this.containerImgAndVideoReviewsS.forEach((el) => {
        el.nativeElement.style.border = "2px solid rgba(0, 0, 0, 0)";
      });

      this.showImgsArray = true;

      clearTimeout(this.settimeOutAny);

      this.settimeOutAny = setTimeout(() => {
        if(!this.wasClickedOneTimeIndexGreaterThanOne){
          this.wasClickedOneTimeIndexGreaterThanOne = true;
          this.funcToScroll(valueScroll, 'instant');
        }else {
          this.funcToScroll(valueScroll, 'smooth');
        }
        this.funcScrollContainerImgAndVideo();
      }, 20)as unknown as number;

      containerImgVideoReviewsMain.style.border = '2px solid rgb(255, 0, 0)';
      containerImgVideoReviewsMain.style.padding = "2px 2px";
    }else {
      this.showImgsArray = false;
      this.lastIndexClicked = 0;
      this.wasClickedOneTimeIndexGreaterThanOne = false;
      containerImgVideoReviewsMain.style.border = '2px solid rgba(0, 0, 0, 0)';
      containerImgVideoReviewsMain.style.padding = "0px 0px";
    }
  };

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
    this.mouseEnterSvgPlayVideo = false;
  };

  onClickArrowLeft(){
    this.removeValuesContainerImgVideo();

    this.lastIndexClicked = this.lastIndexClicked - 1;

    const element = this.containerImgAndVideoReviewsS.toArray()[this.lastIndexClicked];
    element.nativeElement.style.border = '2px solid rgb(255, 0, 0)';
    element.nativeElement.style.padding = "2px 2px";
  }

  onClickArrowRight(){
    this.removeValuesContainerImgVideo();

    this.lastIndexClicked = this.lastIndexClicked + 1;

    const element = this.containerImgAndVideoReviewsS.toArray()[this.lastIndexClicked];
    element.nativeElement.style.border = '2px solid rgb(255, 0, 0)';
    element.nativeElement.style.padding = "2px 2px";
  }

  removeValuesContainerImgVideo = () => {
    this.containerImgAndVideoReviewsS.forEach((el) => {
      el.nativeElement.style.border = "2px solid rgba(0, 0, 0, 0)";
      el.nativeElement.style.padding = "0px 0px";
    });
  }

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutAny);
  }
}
