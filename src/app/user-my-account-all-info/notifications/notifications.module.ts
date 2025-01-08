import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { OrderUpdatesComponent } from './order-updates/order-updates.component';
import { PromotionComponent } from './promotion/promotion.component';
import { WalletComponent } from './wallet/wallet.component';
import { ShopeeUpdatesComponent } from './shopee-updates/shopee-updates.component';


@NgModule({
  declarations: [
    OrderUpdatesComponent,
    PromotionComponent,
    WalletComponent,
    ShopeeUpdatesComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
