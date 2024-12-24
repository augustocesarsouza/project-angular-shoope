import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMyAccountAllInfoRoutingModule } from './user-my-account-all-info-routing.module';
import { MyCoinsShopeeComponent } from './my-coins-shopee/my-coins-shopee.component';
import { MyCuponsComponent } from './my-cupons/my-cupons.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';

@NgModule({
  declarations: [
    MyCoinsShopeeComponent,
    MyCuponsComponent,
    MyPurchasesComponent,
  ],
  imports: [
    CommonModule,
    UserMyAccountAllInfoRoutingModule,
  ]
})
export class UserMyAccountAllInfoModule { }
