import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashOfferAndCountdownComponent } from './flash-offer-and-countdown.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';

describe('FlashOfferAndCountdownComponent', () => {
  let component: FlashOfferAndCountdownComponent;
  let fixture: ComponentFixture<FlashOfferAndCountdownComponent>;

  const objCountdown = {
    hours: 0,
    minutes: 59,
    seconds: 52
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashOfferAndCountdownComponent],
      imports: [AllSvgModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashOfferAndCountdownComponent);
    component = fixture.componentInstance;

    component.hours = objCountdown.hours;
    component.minutes = objCountdown.minutes;
    component.seconds = objCountdown.seconds;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img flash deals img src', () => {
    const img = fixture.nativeElement.querySelector(".container-flash-deals-img img");
    expect(img.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729512130/img-flash-deals/2c66c570e9bc4309bc51_eb0lw4.png");
  });

  it('should render img flash deals img alt', () => {
    const img = fixture.nativeElement.querySelector(".container-flash-deals-img img");
    expect(img.alt).toBe("img-about-flesh-offer");
  });

  it('should render img chronometer src', () => {
    const img = fixture.nativeElement.querySelector(".container-chronometer img");
    expect(img.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1730893687/flash-offer-img/3b9d94a588dd77fd5ec6_wlo4sr.png");
  });

  it('should render img chronometer alt', () => {
    const img = fixture.nativeElement.querySelector(".container-chronometer img");
    expect(img.alt).toBe("img-chronometer");
  });

  it('should render header end in', () => {
    const header = fixture.nativeElement.querySelector(".header-end-in");
    expect(header.textContent).toBe("TERMINA EM");
  });

  it('should render digit Box All have 3 elements', () => {
    const digitBoxAll = fixture.nativeElement.querySelectorAll(".digit-box");
    expect(digitBoxAll.length).toEqual(3);
  });

  it('should render digit Box All have see 3 elements', () => {
    const digitBoxAll = fixture.nativeElement.querySelectorAll(".digit-box");
    expect(digitBoxAll[0].textContent).toBe(`${objCountdown.hours}0`);
    expect(digitBoxAll[1].textContent).toBe(`${objCountdown.minutes}`);
    expect(digitBoxAll[2].textContent).toBe(`${objCountdown.seconds}`);
  });
});
