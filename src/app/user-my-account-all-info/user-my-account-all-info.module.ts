import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMyAccountAllInfoRoutingModule } from './user-my-account-all-info-routing.module';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { HeaderAndFooterForAllComponentsModule } from '../header-and-footer-for-all-components/header-and-footer-for-all-components.module';

@NgModule({
  declarations: [
    MyPurchasesComponent,
  ],
  imports: [
    CommonModule,
    UserMyAccountAllInfoRoutingModule,
    HeaderAndFooterForAllComponentsModule
  ]
})
export class UserMyAccountAllInfoModule { }
