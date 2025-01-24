import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleshOfferEveryDayComponent } from './flesh-offer-every-day.component';
import { ObjTime } from '../../home-page/header-body-home-shopee/home-body-main/home-body-main.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { ElementRef, QueryList } from '@angular/core';

describe('FleshOfferEveryDayComponent', () => {
  let component: FleshOfferEveryDayComponent;
  let fixture: ComponentFixture<FleshOfferEveryDayComponent>;

  const objHoursFleshOffers: ObjTime = {
    inProgress: true,
    time: new Date("Sun Jan 19 2025 13:00:00 GMT-0400 (Horário Padrão do Amazonas)")
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FleshOfferEveryDayComponent],
      imports: [AllSvgModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleshOfferEveryDayComponent);

    component = fixture.componentInstance;

    component.carouselCustom = {
      nativeElement: document.createElement('div'),
    } as ElementRef<HTMLDivElement>;

    component.containerArrowLeft = {
      nativeElement: document.createElement('div'),
    } as ElementRef<HTMLDivElement>;

    component.containerArrowRight = {
      nativeElement: document.createElement('div'),
    } as ElementRef<HTMLDivElement>;

    // Mockando ViewChildren
    component.containerEachSchedule = new QueryList<ElementRef<HTMLDivElement>>();
    const mockElements = [
      { nativeElement: document.createElement('div') },
      { nativeElement: document.createElement('div') },
    ];
    component.containerEachSchedule.reset(mockElements);

    const allHoursFleshOffers: ObjTime[] = [];
    allHoursFleshOffers.push(objHoursFleshOffers);

    component.allHoursFleshOffers = allHoursFleshOffers;
    component.getAllHoursFleshOffers = jasmine.createSpy('getAllHoursFleshOffers');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render flesh offer img src', () => {
    const img = fixture.nativeElement.querySelector(".container-flesh-offer-img img");
    expect(img.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1730896707/flash-offer-img/br-11134004-7r98o-m1wyzuu42c4138_vzsoej.png");
  });

  it('should render flesh offer img alt', () => {
    const img = fixture.nativeElement.querySelector(".container-flesh-offer-img img");
    expect(img.alt).toBe("Flesh Offer Everyday");
  });

  it('should render svg left', () => {
    const svg = fixture.nativeElement.querySelector(".container-arrow-left svg");
    expect(svg).not.toBeNull();
  });

  it('should render svg right', () => {
    const svg = fixture.nativeElement.querySelector(".container-arrow-right svg");
    expect(svg).not.toBeNull();
  });

  it('should render headerHoursScheduleAll length 1', () => {
    const headerHoursScheduleAll = fixture.nativeElement.querySelectorAll(".header-hours-schedule");
    expect(headerHoursScheduleAll.length).toEqual(1);
  });

  it('should render headerHoursScheduleAll first value', () => {
    const headerHoursScheduleAll = fixture.nativeElement.querySelectorAll(".header-hours-schedule");
    expect(headerHoursScheduleAll[0].textContent.trim()).toBe("13:00");
  });

  it('should render span in progress value', () => {
    const spanInProgress = fixture.nativeElement.querySelector(".span-in-progress");
    expect(spanInProgress.textContent.trim()).toBe("Em andamento");
  });

  it('should render span in progress value', () => {
    const allHoursFleshOffers: ObjTime[] = [];

    const objHoursFleshOffers: ObjTime = {
      inProgress: false,
      time: new Date("Sun Jan 19 2025 13:00:00 GMT-0400 (Horário Padrão do Amazonas)")
    }

    allHoursFleshOffers.push(objHoursFleshOffers);

    component.allHoursFleshOffers = allHoursFleshOffers;

    fixture.detectChanges();

    const spanSoon = fixture.nativeElement.querySelector(".span-soon");
    expect(spanSoon.textContent.trim()).toBe("Em Breve");
  });
});
