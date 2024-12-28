import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountAllComponentRoutingModule } from './my-account-all-component-routing.module';
import { ProfileComponent } from './perfil-components/profile/profile.component';
import { HomePageModule } from '../../home-page/home-page.module';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { PerfilComponent } from './perfil-components/perfil/perfil.component';
import { InsertEmailComponent } from './perfil-components/insert-email/insert-email.component';
import { AboutShopeeComponent } from '../footer-my-account-components/about-shopee/about-shopee.component';
import { FooterLoginAndRegisterComponent } from '../footer-my-account/footer-login-and-register.component';
import { CustomerServiceComponent } from '../footer-my-account-components/customer-service/customer-service.component';
import { DownloadAppShopeeComponent } from '../footer-my-account-components/download-app-shopee/download-app-shopee.component';
import { FollowUsComponent } from '../footer-my-account-components/follow-us/follow-us.component';
import { PaymentComponent } from '../footer-my-account-components/payment/payment.component';
import { RightsShopeeComponent } from '../footer-my-account-components/rights-shopee/rights-shopee.component';
import { ChangeEmailComponent } from './perfil-components/change-email/change-email.component';
import { PhoneChangeComponent } from './perfil-components/phone-change/phone-change.component';
import { EmailAndPhoneConfirmCodeComponent } from './perfil-components/email-and-phone-confirm-code/email-and-phone-confirm-code.component';
import { FillCpfAndBirthDateComponent } from './perfil-components/fill-cpf-and-birth-date/fill-cpf-and-birth-date.component';

@NgModule({
  declarations: [
    ProfileComponent,
    PerfilComponent,
    InsertEmailComponent,
    EmailAndPhoneConfirmCodeComponent,
    AboutShopeeComponent,
    FooterLoginAndRegisterComponent,
    CustomerServiceComponent,
    DownloadAppShopeeComponent,
    FollowUsComponent,
    PaymentComponent,
    RightsShopeeComponent,
    ChangeEmailComponent,
    PhoneChangeComponent,
    FillCpfAndBirthDateComponent
  ],
  imports: [
    CommonModule,
    MyAccountAllComponentRoutingModule,
    HomePageModule,
    AllSvgModule
  ]
})
export class MyAccountAllComponentModule { }
