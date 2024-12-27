import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAndRegisterUserRoutingModule } from './login-and-register-user-routing.module';
import { LoginComponent } from './login-components/login/login.component';
import { HeaderToLoginAndRegisterComponent } from './header-to-login-and-register/header-to-login-and-register.component';
import { AllSvgModule } from '../all-svg/all-svg.module';
import { BodyLoginMainComponent } from './login-components/body-login-main/body-login-main.component';
import { RegisterMainComponent } from './register-componenets/register-main/register-main.component';
import { FirstStepCreateAccountComponent } from './register-componenets/next-step-to-register-account/step-to-create-account/first-step-create-account/first-step-create-account.component';
import { SecondStepCreateAccountComponent } from './register-componenets/next-step-to-register-account/step-to-create-account/second-step-create-account/second-step-create-account.component';
import { ThirdStepCreateAccountComponent } from './register-componenets/next-step-to-register-account/step-to-create-account/third-step-create-account/third-step-create-account.component';
import { StepToCreateAccountMainComponent } from './register-componenets/next-step-to-register-account/step-to-create-account-main/step-to-create-account-main.component';
import { BodyRegisterUserMainComponent } from './register-componenets/body-register-user-main/body-register-user-main.component';
import { FormsModule } from '@angular/forms';
import { FooterLoginAndRegisterComponent } from './login-components/footer-login-and-register/footer-login-and-register.component';
import { CustomerServiceComponent } from './login-components/footer-components/customer-service/customer-service.component';
import { AboutShopeeComponent } from './login-components/footer-components/about-shopee/about-shopee.component';
import { PaymentComponent } from './login-components/footer-components/payment/payment.component';
import { FollowUsComponent } from './login-components/footer-components/follow-us/follow-us.component';
import { DownloadAppShopeeComponent } from './login-components/footer-components/download-app-shopee/download-app-shopee.component';
import { RightsShopeeComponent } from './login-components/footer-components/rights-shopee/rights-shopee.component';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderToLoginAndRegisterComponent,
    BodyLoginMainComponent,
    FooterLoginAndRegisterComponent,
    CustomerServiceComponent,
    AboutShopeeComponent,
    PaymentComponent,
    FollowUsComponent,
    DownloadAppShopeeComponent,
    RightsShopeeComponent,
    RegisterMainComponent,
    BodyRegisterUserMainComponent,
    FirstStepCreateAccountComponent,
    SecondStepCreateAccountComponent,
    ThirdStepCreateAccountComponent,
    StepToCreateAccountMainComponent,
  ],
  imports: [
    CommonModule,
    LoginAndRegisterUserRoutingModule,
    AllSvgModule,
    FormsModule
  ]
})
export class LoginUserModule { }
