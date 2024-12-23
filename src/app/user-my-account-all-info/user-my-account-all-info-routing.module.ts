import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCoinsShopeeComponent } from './my-coins-shopee/my-coins-shopee.component';
import { MyCuponsComponent } from './my-cupons/my-cupons.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';

const routes: Routes = [
  {path: 'account',
    loadChildren: () => import('./my-account-all-component/my-account-all-component.module').then(m => m.MyAccountAllComponentModule)
  },
  { path: 'coin', component: MyCoinsShopeeComponent },
  { path: 'voucher-wallet', component: MyCuponsComponent },
  { path: 'purchase', component: MyPurchasesComponent },
  {path: 'notifications',
    loadChildren: () => import('./notifications-all-component/notifications-all-component.module').then(m => m.NotificationsAllComponentModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMyAccountAllInfoRoutingModule { }
