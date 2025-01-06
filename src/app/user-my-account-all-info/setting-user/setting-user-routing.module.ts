import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../my-account-all-component/perfil-components/profile/profile.component';
import { PrivacyComponent } from './privacy-components/privacy/privacy.component';

const routes: Routes = [
  { path: '', component: ProfileComponent,
    children: [
      { path: 'privacy', component: PrivacyComponent },
      { path: '', redirectTo: 'privacy', pathMatch: 'full' },
      { path: '**', redirectTo: 'privacy' }
    ]
   },
  {path: '', pathMatch: 'full', redirectTo: 'profile'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingUserRoutingModule { }
