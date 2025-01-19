import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleshOfferEveryDayAndHoursComponent } from './flesh-offer-every-day-and-hours.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoryToProductComponent } from '../category-to-product/category-to-product.component';
import { ProductFlashOfferComponent } from '../product-flash-offer/product-flash-offer.component';
import { FooterForFlashOfferComponent } from '../footer-for-flash-offer/footer-for-flash-offer.component';
// import { FooterLoginAndRegisterComponent } from '../../header-and-footer-for-all-components/footer-login-and-register/footer-login-and-register.component';
// import { CustomerServiceComponent } from '../../header-and-footer-for-all-components/footer-components/customer-service/customer-service.component';
import { HeaderAndFooterForAllComponentsModule } from '../../header-and-footer-for-all-components/header-and-footer-for-all-components.module';
import { FlashOfferAndCountdownComponent } from '../flash-offer-and-countdown/flash-offer-and-countdown.component';
import { FleshOfferEveryDayComponent } from '../flesh-offer-every-day/flesh-offer-every-day.component';
import { ObjTime } from '../../home-page/header-body-home-shopee/home-body-main/home-body-main.component';

describe('FleshOfferEveryDayAndHoursComponent', () => {
  let component: FleshOfferEveryDayAndHoursComponent;
  let fixture: ComponentFixture<FleshOfferEveryDayAndHoursComponent>;

  const objHoursFleshOffers: ObjTime = {
    inProgress: true,
    time: new Date("Sun Jan 19 2025 13:00:00 GMT-0400 (Horário Padrão do Amazonas)")
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FleshOfferEveryDayAndHoursComponent, CategoryToProductComponent, ProductFlashOfferComponent,
        FooterForFlashOfferComponent, FlashOfferAndCountdownComponent, FleshOfferEveryDayComponent
      ],
      imports: [HttpClientModule, RouterTestingModule, AllSvgModule, HeaderAndFooterForAllComponentsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleshOfferEveryDayAndHoursComponent);
    component = fixture.componentInstance;

    const allHoursFleshOffers: ObjTime[] = [];
    allHoursFleshOffers.push(objHoursFleshOffers);

    component.updateObjTimeFlashDeals = jasmine.createSpy('updateObjTimeFlashDeals');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
