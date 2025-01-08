import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { OrderUpdatesComponent } from './order-updates/order-updates.component';
import { PromotionComponent } from './promotion/promotion.component';
import { WalletComponent } from './wallet/wallet.component';


@NgModule({
  declarations: [
    OrderUpdatesComponent,
    PromotionComponent,
    WalletComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
