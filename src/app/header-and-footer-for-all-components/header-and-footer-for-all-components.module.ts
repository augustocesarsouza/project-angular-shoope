import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLoginAndRegisterComponent } from './footer-login-and-register/footer-login-and-register.component';
import { headerToAllComponentsComponent } from './header-to-all-components/header-to-login-and-register.component';
import { AllSvgModule } from '../all-svg/all-svg.module';
import { CustomerServiceComponent } from './footer-components/customer-service/customer-service.component';
import { AboutShopeeComponent } from './footer-components/about-shopee/about-shopee.component';
import { PaymentComponent } from './footer-components/payment/payment.component';
import { FollowUsComponent } from './footer-components/follow-us/follow-us.component';
import { DownloadAppShopeeComponent } from './footer-components/download-app-shopee/download-app-shopee.component';
import { RightsShopeeComponent } from './footer-components/rights-shopee/rights-shopee.component';

@NgModule({
  imports: [
    CommonModule,
    AllSvgModule
  ],
  declarations: [FooterLoginAndRegisterComponent, headerToAllComponentsComponent, CustomerServiceComponent,
    AboutShopeeComponent,
    PaymentComponent,
    FollowUsComponent,
    DownloadAppShopeeComponent,
    RightsShopeeComponent],
  exports: [
    FooterLoginAndRegisterComponent, headerToAllComponentsComponent, CustomerServiceComponent,
    AboutShopeeComponent,
    PaymentComponent,
    FollowUsComponent,
    DownloadAppShopeeComponent,
    RightsShopeeComponent
  ]
})
export class HeaderAndFooterForAllComponentsModule { }
