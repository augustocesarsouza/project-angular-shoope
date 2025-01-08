import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderUpdatesComponent } from './order-updates/order-updates.component';
import { ProfileComponent } from '../my-account-all-component/perfil-components/profile/profile.component';
import { PromotionComponent } from './promotion/promotion.component';
import { WalletComponent } from './wallet/wallet.component';
import { ShopeeUpdatesComponent } from './shopee-updates/shopee-updates.component';

const routes: Routes = [
  { path: '', component: ProfileComponent,
    children: [
      { path: 'order', component: OrderUpdatesComponent },
      { path: 'promotion', component: PromotionComponent },
      { path: 'wallet', component: WalletComponent },
      { path: 'shopee', component: ShopeeUpdatesComponent },
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
