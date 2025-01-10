import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCuponsComponent } from './my-cupons/my-cupons.component';
import { ProfileComponent } from '../my-account-all-component/perfil-components/profile/profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent,
    children: [
      { path: '', component: MyCuponsComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '' }
    ]
   },
  // { path: 'perfil', component: PerfilComponent },
  {path: '', pathMatch: 'full', redirectTo: 'profile'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCuponsComponentsRoutingModule { }
