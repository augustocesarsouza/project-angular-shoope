import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShopeeCoinsComponent } from './my-shopee-coins.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('MyShopeeCoinsComponent', () => {
  let component: MyShopeeCoinsComponent;
  let fixture: ComponentFixture<MyShopeeCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyShopeeCoinsComponent],
      imports: [HttpClientModule, RouterTestingModule, AllSvgModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyShopeeCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img coins src', () => {
    const img = fixture.nativeElement.querySelector('.container-img-coins img');
    expect(img.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729346258/img-shopee-my-coins-shopee/75efaf1b556a8e2fac6a_gbqphv.png");
  });

  it('should render img coins alt', () => {
    const img = fixture.nativeElement.querySelector('.container-img-coins img');
    expect(img.alt).toBe("img-coins");
  });

  it('should render span coins available', () => {
    const span = fixture.nativeElement.querySelector('.container-span-and-svg-question-mark span');
    expect(span.textContent).toBe("Moedas disponíveis");
  });

  it('should render svg question-mark', () => {
    const svgQuestionMark = fixture.nativeElement.querySelector('.container-span-and-svg-question-mark app-svg-question-mark');
    expect(svgQuestionMark).not.toBeNull();
  });

  it('should render span quantity coins', () => {
    const span = fixture.nativeElement.querySelector('.container-span-and-svg-arrow-right span');
    expect(span.textContent).toBe("0 moedas que expiram em");
  });

  it('should render svg arrow-right', () => {
    const svg = fixture.nativeElement.querySelector('.container-span-and-svg-question-mark svg');
    expect(svg).not.toBeNull();
  });

  it('should render span earn more coins', () => {
    const header = fixture.nativeElement.querySelector('.container-second-header h1');
    expect(header.textContent).toBe("Ganhe mais moedas");
  });

  it('should render svg arrow-right', () => {
    const svg = fixture.nativeElement.querySelector('.container-second-header svg');
    expect(svg).not.toBeNull();
  });

  it('should render span you yet not have coins', () => {
    const span = fixture.nativeElement.querySelector('.container-body span');
    expect(span.textContent).toBe("Você ainda não tem moedas.");
  });

  it('should render button how to earn coins', () => {
    const button = fixture.nativeElement.querySelector('.container-body button');
    expect(button.textContent).toBe("Como ganhar moedas?");
  });
});
