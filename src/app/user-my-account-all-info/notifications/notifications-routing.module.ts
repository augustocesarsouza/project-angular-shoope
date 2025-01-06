import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderUpdatesComponent } from './order-updates/order-updates.component';
import { ProfileComponent } from '../my-account-all-component/perfil-components/profile/profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent,
    children: [
      { path: 'order', component: OrderUpdatesComponent },
      { path: '', redirectTo: 'order', pathMatch: 'full' },
      { path: '**', redirectTo: 'order' }
    ]
   },
  {path: '', pathMatch: 'full', redirectTo: 'profile'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
