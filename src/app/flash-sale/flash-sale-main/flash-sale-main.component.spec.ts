import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashSaleMainComponent } from './flash-sale-main.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { HeaderMainComponent } from '../../home-page/header-main/header-main.component';
import { FleshOfferEveryDayAndHoursComponent } from '../flesh-offer-every-day-and-hours/flesh-offer-every-day-and-hours.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderFirstComponent } from '../../home-page/header-first/header-first.component';
import { HeaderSecondComponent } from '../../home-page/header-second/header-second.component';
import { DownloadAppFloatingComponent } from '../../home-page/download-app-floating/download-app-floating.component';
import { NameUserFloatingComponent } from '../../home-page/name-user-floating/name-user-floating.component';
import { LanguageFloatingComponent } from '../../home-page/language-floating/language-floating.component';
import { NotificationFloatingComponent } from '../../home-page/notification-floating/notification-floating.component';
import { CategoryToProductComponent } from '../category-to-product/category-to-product.component';
import { ProductFlashOfferComponent } from '../product-flash-offer/product-flash-offer.component';
import { FooterForFlashOfferComponent } from '../footer-for-flash-offer/footer-for-flash-offer.component';
import { FooterLoginAndRegisterComponent } from '../../header-and-footer-for-all-components/footer-login-and-register/footer-login-and-register.component';
import { CustomerServiceComponent } from '../../header-and-footer-for-all-components/footer-components/customer-service/customer-service.component';
import { AboutShopeeComponent } from '../../header-and-footer-for-all-components/footer-components/about-shopee/about-shopee.component';
import { PaymentComponent } from '../../header-and-footer-for-all-components/footer-components/payment/payment.component';
import { HeaderAndFooterForAllComponentsModule } from '../../header-and-footer-for-all-components/header-and-footer-for-all-components.module';
import { FlashOfferAndCountdownComponent } from '../flash-offer-and-countdown/flash-offer-and-countdown.component';
import { FleshOfferEveryDayComponent } from '../flesh-offer-every-day/flesh-offer-every-day.component';

describe('FlashSaleMainComponent', () => {
  let component: FlashSaleMainComponent;
  let fixture: ComponentFixture<FlashSaleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashSaleMainComponent, HeaderMainComponent, FleshOfferEveryDayAndHoursComponent, HeaderFirstComponent,
        HeaderSecondComponent, DownloadAppFloatingComponent, NameUserFloatingComponent, LanguageFloatingComponent,
        NotificationFloatingComponent, CategoryToProductComponent, ProductFlashOfferComponent,
        FooterForFlashOfferComponent, FooterLoginAndRegisterComponent, CustomerServiceComponent, AboutShopeeComponent,
        PaymentComponent, FlashOfferAndCountdownComponent, FleshOfferEveryDayComponent
      ],
      imports: [HttpClientModule, RouterTestingModule, AllSvgModule, HeaderAndFooterForAllComponentsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashSaleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
