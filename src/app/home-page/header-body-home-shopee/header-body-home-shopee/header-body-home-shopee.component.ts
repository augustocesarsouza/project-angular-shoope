import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header-body-home-shopee',
  templateUrl: './header-body-home-shopee.component.html',
  styleUrl: './header-body-home-shopee.component.scss'
})
export class HeaderBodyHomeShopeeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('containerFirstImages') containerFirstImages!: ElementRef<HTMLDivElement>;
  @ViewChild('ContainerButtonNavLeft') containerButtonNavLeft!: ElementRef<HTMLDivElement>;
  @ViewChild('ContainerButtonNavRight') containerButtonNavRight!: ElementRef<HTMLDivElement>;

  @ViewChildren('containerBallAll') containerBallAll!: QueryList<ElementRef<HTMLDivElement>>;

  whichImageIs = 0;
  isScrolling = false;
  settimeOutScrollLeftRight!: number | null;

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
