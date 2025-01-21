import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import { EmailAndPhoneConfirmCodeComponent } from './user-my-account-all-info/my-account-all-component/perfil-components/email-and-phone-confirm-code/email-and-phone-confirm-code.component';
import { VerifyPasswordComponent } from './user-my-account-all-info/my-account-all-component/change-password/verify-password/verify-password.component';
import { VerifyPasswordStepTwoComponent } from './user-my-account-all-info/my-account-all-component/change-password/verify-password-step-two/verify-password-step-two.component';
import { FullCheckPasswordComponent } from './user-my-account-all-info/my-account-all-component/change-password/full-check-password/full-check-password.component';
import { ProductFlashSaleMainComponent } from './product-flash-sale-components/product-flash-sale-main/product-flash-sale-main.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: '', component: HomeComponent},
  {path: 'confirm-code-email', component: EmailAndPhoneConfirmCodeComponent},
  {path: 'verify', component: VerifyPasswordComponent},
  {path: 'verify/password', component: VerifyPasswordStepTwoComponent},
  {path: 'verify/ivs', component: FullCheckPasswordComponent},
  {path: 'buyer',
    loadChildren: () => import('./login-and-register-user/login-and-register-user.module').then(m => m.LoginUserModule)
  },
  {path: 'user',
    loadChildren: () => import('./user-my-account-all-info/user-my-account-all-info.module').then(m => m.UserMyAccountAllInfoModule)
  },
  {path: 'flash_sale',
    loadChildren: () => import('./flash-sale/flash-sale.module').then(m => m.FlashSaleModule)
  },
  {path: 'flash_sale_product/:id', component: ProductFlashSaleMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
