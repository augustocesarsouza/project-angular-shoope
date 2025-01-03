import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import { EmailAndPhoneConfirmCodeComponent } from './user-my-account-all-info/my-account-all-component/perfil-components/email-and-phone-confirm-code/email-and-phone-confirm-code.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: '', component: HomeComponent},
  {path: 'confirm-code-email', component: EmailAndPhoneConfirmCodeComponent},
  {path: 'buyer',
    loadChildren: () => import('./login-and-register-user/login-and-register-user.module').then(m => m.LoginUserModule)
  },
  {path: 'user',
    loadChildren: () => import('./user-my-account-all-info/user-my-account-all-info.module').then(m => m.UserMyAccountAllInfoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
