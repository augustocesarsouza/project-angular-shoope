import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

interface imgsTopProps {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-header-body-home-shopee',
  templateUrl: './header-body-home-shopee.component.html',
  styleUrl: './header-body-home-shopee.component.scss'
})
export class HeaderBodyHomeShopeeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('containerFirstImages') containerFirstImages!: ElementRef<HTMLDivElement>;
  @ViewChild('ContainerButtonNavLeft') containerButtonNavLeft!: ElementRef<HTMLDivElement>;
  @ViewChild('ContainerButtonNavRight') containerButtonNavRight!: ElementRef<HTMLDivElement>;

  @ViewChildren('containerBallAll') containerBallAll!: QueryList<ElementRef<HTMLDivElement>>;

  whichImageIs = 0;
  isScrolling = false;
  settimeOutScrollLeftRight!: number | null;

  imgsTopArray: imgsTopProps[] = [];

  ngOnInit(): void {
    this.imgsTopArray.push({
      src: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435381/img-shopee-body-home/br-11134258-7r98o-m18rnetp75sy9d_xxhdpi_qq5ak8.jpg',
      alt: 'img-fashion-week-1'
    });

    this.imgsTopArray.push({
      src: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435368/img-shopee-body-home/br-11134258-7r98o-m1cqymgzfajm6e_xxhdpi_o6tp0q.jpg',
      alt: 'img-fashion-week-2'
    });

    this.imgsTopArray.push({
      src: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435376/img-shopee-body-home/br-11134258-7r98o-m1d1kwbempq8be_xxhdpi_rmui7s.jpg',
      alt: 'img-fashion-week-3'
    });

    this.imgsTopArray.push({
      src: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435372/img-shopee-body-home/br-11134258-7r98o-m1cragk1xtq8e8_xxhdpi_lpkzkn.jpg',
      alt: 'img-fashion-week-4'
    });
  }

  ngAfterViewInit(): void {
    this.containerBallAll.forEach((el, i) => {
      if(i === 0){
        el.nativeElement.style.backgroundColor = '#ff5722';
      }
    });
  }

  scrollLeft(){
    if (this.isScrolling) return;
    this.isScrolling = true;

    this.containerFirstImages.nativeElement.scrollBy({ left: -800, behavior: 'smooth' });

    const arrayContainerBallAll = this.containerBallAll.toArray();

    arrayContainerBallAll.forEach((el) => {
      el.nativeElement.style.backgroundColor = '#d7d7d7';
    });

    const newImage = this.whichImageIs - 1;

    if(newImage === -1){
      this.containerFirstImages.nativeElement.scrollBy({ left: 2400, behavior: 'smooth' });

      this.whichImageIs = 3;
      arrayContainerBallAll[this.whichImageIs].nativeElement.style.backgroundColor = '#ff5722';
      this.enableScrollAfterDelay();
      return;
    }

    arrayContainerBallAll[newImage].nativeElement.style.backgroundColor = '#ff5722';

    this.whichImageIs = newImage;

    this.enableScrollAfterDelay();
  }

  scrollRight = () => {
    if (this.isScrolling) return;
    this.isScrolling = true;

    this.containerFirstImages.nativeElement.scrollBy({ left: 800, behavior: 'smooth' });

    const arrayContainerBallAll = this.containerBallAll.toArray();

    arrayContainerBallAll.forEach((el) => {
      el.nativeElement.style.backgroundColor = '#d7d7d7';
    });

    const newImage = this.whichImageIs + 1;

    if(newImage === 4){
      this.containerFirstImages.nativeElement.scrollBy({ left: -2400, behavior: 'smooth' });

      this.whichImageIs = 0;
      arrayContainerBallAll[this.whichImageIs].nativeElement.style.backgroundColor = '#ff5722';
      this.enableScrollAfterDelay();
      return;
    }

    arrayContainerBallAll[newImage].nativeElement.style.backgroundColor = '#ff5722';

    this.whichImageIs = newImage;

    this.enableScrollAfterDelay();
  };

  enableScrollAfterDelay() {
    if(this.settimeOutScrollLeftRight){
      clearTimeout(this.settimeOutScrollLeftRight);
      this.settimeOutScrollLeftRight = null;
    }

    this.settimeOutScrollLeftRight = setTimeout(() => {
      this.isScrolling = false;
      this.settimeOutScrollLeftRight = null;
    }, 600) as unknown as number;
  }


  onMouseEnterContainerImage = () => {
    this.containerButtonNavLeft.nativeElement.style.display = 'flex';
    this.containerButtonNavRight.nativeElement.style.display = 'flex';
  };

  onMouseLeaveContainerImage = () => {
    this.containerButtonNavLeft.nativeElement.style.display = 'none';
    this.containerButtonNavRight.nativeElement.style.display = 'none';
  };

  ngOnDestroy(): void {
    if(this.settimeOutScrollLeftRight){
      clearTimeout(this.settimeOutScrollLeftRight);
    }
  }
}
