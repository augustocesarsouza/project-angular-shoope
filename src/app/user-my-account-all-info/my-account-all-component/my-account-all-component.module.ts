import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountAllComponentRoutingModule } from './my-account-all-component-routing.module';
import { ProfileComponent } from './perfil-components/profile/profile.component';
import { HomePageModule } from '../../home-page/home-page.module';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { PerfilComponent } from './perfil-components/perfil/perfil.component';
import { InsertEmailComponent } from './perfil-components/insert-email/insert-email.component';
import { ChangeEmailComponent } from './perfil-components/change-email/change-email.component';
import { PhoneChangeComponent } from './perfil-components/phone-change/phone-change.component';
import { EmailAndPhoneConfirmCodeComponent } from './perfil-components/email-and-phone-confirm-code/email-and-phone-confirm-code.component';
import { FillCpfAndBirthDateComponent } from './perfil-components/fill-cpf-and-birth-date/fill-cpf-and-birth-date.component';
import { CardBackAccountsComponent } from './cards-back-accounts-componets/card-back-accounts/card-back-accounts.component';
import { AddressComponent } from './address-components/address/address.component';
import { ModalNewAddressComponent } from './address-components/modal-new-address/modal-new-address.component';
import { ViewAddressUserComponent } from './address-components/view-address-user/view-address-user.component';
import { VerifyPasswordComponent } from './change-password/verify-password/verify-password.component';
import { HeaderAndFooterForAllComponentsModule } from '../../header-and-footer-for-all-components/header-and-footer-for-all-components.module';
import { VerifyPasswordStepTwoComponent } from './change-password/verify-password-step-two/verify-password-step-two.component';
import { FullCheckPasswordComponent } from './change-password/full-check-password/full-check-password.component';
import { ChangePasswordWithInputComponent } from './change-password/change-password-with-input/change-password-with-input.component';

@NgModule({
  declarations: [
    ProfileComponent,
    PerfilComponent,
    InsertEmailComponent,
    EmailAndPhoneConfirmCodeComponent,
    ChangeEmailComponent,
    PhoneChangeComponent,
    FillCpfAndBirthDateComponent,
    CardBackAccountsComponent,
    AddressComponent,
    ModalNewAddressComponent,
    ViewAddressUserComponent,
    VerifyPasswordComponent,
    VerifyPasswordStepTwoComponent,
    FullCheckPasswordComponent,
    ChangePasswordWithInputComponent,
  ],
  imports: [
    CommonModule,
    MyAccountAllComponentRoutingModule,
    HomePageModule,
    AllSvgModule,
    HeaderAndFooterForAllComponentsModule
  ]
})
export class MyAccountAllComponentModule { }
