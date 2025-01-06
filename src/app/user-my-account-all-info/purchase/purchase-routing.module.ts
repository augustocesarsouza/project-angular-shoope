import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../my-account-all-component/perfil-components/profile/profile.component';
import { PurchaseComponentsComponent } from './purchase-components/purchase-components.component';

const routes: Routes = [
  { path: '', component: ProfileComponent,
    children: [
      { path: '', component: PurchaseComponentsComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '' }
    ]
   },
  {path: '', pathMatch: 'full', redirectTo: 'profile'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
