import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './perfil-components/profile/profile.component';
import { PerfilComponent } from './perfil-components/perfil/perfil.component';
import { InsertEmailComponent } from './perfil-components/insert-email/insert-email.component';
import { ChangeEmailComponent } from './perfil-components/change-email/change-email.component';
import { PhoneChangeComponent } from './perfil-components/phone-change/phone-change.component';
import { FillCpfAndBirthDateComponent } from './perfil-components/fill-cpf-and-birth-date/fill-cpf-and-birth-date.component';

const routes: Routes = [
  { path: '', component: ProfileComponent,
    children: [
      { path: 'perfil', component: PerfilComponent },
      { path: 'email', component: InsertEmailComponent },
      { path: 'change-email', component: ChangeEmailComponent },
      { path: 'phone', component: PhoneChangeComponent },
      { path: 'kyc', component: FillCpfAndBirthDateComponent },
      { path: '', redirectTo: 'perfil', pathMatch: 'full' },
      { path: '**', redirectTo: 'perfil' }
    ]
   },
  // { path: 'perfil', component: PerfilComponent },
  {path: '', pathMatch: 'full', redirectTo: 'profile'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountAllComponentRoutingModule { }
