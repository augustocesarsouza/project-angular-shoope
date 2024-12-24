import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsAllComponentRoutingModule } from './notifications-all-component-routing.module';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    NotificationsAllComponentRoutingModule
  ]
})
export class NotificationsAllComponentModule { }
