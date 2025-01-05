import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAndRegisterUserRoutingModule } from './login-and-register-user-routing.module';
import { LoginComponent } from './login-components/login/login.component';
import { AllSvgModule } from '../all-svg/all-svg.module';
import { BodyLoginMainComponent } from './login-components/body-login-main/body-login-main.component';
import { RegisterMainComponent } from './register-componenets/register-main/register-main.component';
import { FirstStepCreateAccountComponent } from './register-componenets/next-step-to-register-account/step-to-create-account/first-step-create-account/first-step-create-account.component';
import { SecondStepCreateAccountComponent } from './register-componenets/next-step-to-register-account/step-to-create-account/second-step-create-account/second-step-create-account.component';
import { ThirdStepCreateAccountComponent } from './register-componenets/next-step-to-register-account/step-to-create-account/third-step-create-account/third-step-create-account.component';
import { StepToCreateAccountMainComponent } from './register-componenets/next-step-to-register-account/step-to-create-account-main/step-to-create-account-main.component';
import { BodyRegisterUserMainComponent } from './register-componenets/body-register-user-main/body-register-user-main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderAndFooterForAllComponentsModule } from '../header-and-footer-for-all-components/header-and-footer-for-all-components.module';

@NgModule({
  declarations: [
    LoginComponent,
    BodyLoginMainComponent,
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
    FormsModule,
    HttpClientModule,
    HeaderAndFooterForAllComponentsModule
  ],
  exports: []
})
export class LoginUserModule { }
