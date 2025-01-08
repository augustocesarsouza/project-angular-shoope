import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { OrderUpdatesComponent } from './order-updates/order-updates.component';
import { PromotionComponent } from './promotion/promotion.component';


@NgModule({
  declarations: [
    OrderUpdatesComponent,
    PromotionComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
