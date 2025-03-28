import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-components/login/login.component';
import { RegisterMainComponent } from './register-componenets/register-main/register-main.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterMainComponent },
   {path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginAndRegisterUserRoutingModule { }
