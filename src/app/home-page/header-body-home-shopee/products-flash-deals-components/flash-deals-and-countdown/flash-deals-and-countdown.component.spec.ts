import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashDealsAndCountdownComponent } from './flash-deals-and-countdown.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';

describe('FlashDealsAndCountdownComponent', () => {
  let component: FlashDealsAndCountdownComponent;
  let fixture: ComponentFixture<FlashDealsAndCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashDealsAndCountdownComponent],
      imports: [AllSvgModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashDealsAndCountdownComponent);
    component = fixture.componentInstance;

    component.hours = 5;
    component.minutes = 30;
    component.seconds = 45;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span see all', () => {
    const spanSeeAll = fixture.nativeElement.querySelector(".container-see-all span");

    expect(spanSeeAll.textContent).toEqual("Ver Tudo");
  });

  it('should render svg arrow', () => {
    const svgArrow = fixture.nativeElement.querySelector(".container-see-all svg");

    expect(svgArrow).not.toBeNull();
  });

  it('should render all digit-box', () => {
    const digitBox = fixture.nativeElement.querySelectorAll(".digit-box");

    expect(digitBox.length).toEqual(3);
  });

  it('should render all digit-box correct values', () => {
    const digitBox = fixture.nativeElement.querySelectorAll(".digit-box");

    expect(digitBox[0].textContent).toEqual("05");
    expect(digitBox[1].textContent).toEqual("30");
    expect(digitBox[2].textContent).toEqual("45");
  });
});
