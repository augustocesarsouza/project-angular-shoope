import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ObjTime } from '../../home-page/header-body-home-shopee/home-body-main/home-body-main.component';

@Component({
    selector: 'app-flesh-offer-every-day',
    templateUrl: './flesh-offer-every-day.component.html',
    styleUrl: './flesh-offer-every-day.component.scss',
    standalone: false
})
export class FleshOfferEveryDayComponent implements AfterViewInit {
  @Input() allHoursFleshOffers!: ObjTime[];
  @ViewChildren('containerEachSchedule') containerEachSchedule!: QueryList<ElementRef<HTMLDivElement>>;

  @ViewChild('carouselCustom') carouselCustom!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowLeft') containerArrowLeft!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowRight') containerArrowRight!: ElementRef<HTMLDivElement>;

  @Input() getAllHoursFleshOffers!: (allHoursFleshOffers: ObjTime) => void;

  ngAfterViewInit(): void {
    if(typeof window === 'undefined')return;

    if(this.containerEachSchedule && this.containerEachSchedule.length > 0){
      this.containerEachSchedule.toArray().forEach((el) => {
        el.nativeElement.style.background = "";
        el.nativeElement.style.color = "rgb(195, 195, 195)";
      });

      const containerEach = this.containerEachSchedule.toArray()[0];
      containerEach.nativeElement.style.background = "#ee4d2d";
      containerEach.nativeElement.style.color = "white";
    }

    if(this.carouselCustom?.nativeElement && this.containerArrowLeft?.nativeElement && this.containerArrowRight?.nativeElement){
      const scrollElement = this.carouselCustom.nativeElement;
      const containerLeft = this.containerArrowLeft.nativeElement;
      const containerRight = this.containerArrowRight.nativeElement;

      const scrollLeft = () => scrollElement?.scrollBy({ left: -1200, behavior: 'auto' });
      const scrollRight = () => scrollElement?.scrollBy({ left: 1200, behavior: 'auto' });

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
    };
  }

  onClickContainerEachSchdelu = (obj: ObjTime, i: number) => {
    if(!this.containerEachSchedule) return;
    this.containerEachSchedule.toArray().forEach((el) => {
      el.nativeElement.style.background = "";
      el.nativeElement.style.color = "rgb(195, 195, 195)";
    });

    const containerEach = this.containerEachSchedule.toArray()[i];
    containerEach.nativeElement.style.background = "#ee4d2d";
    containerEach.nativeElement.style.color = "white";

    this.getAllHoursFleshOffers(obj);
  };
}
