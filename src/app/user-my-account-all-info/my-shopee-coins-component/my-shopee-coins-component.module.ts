import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyShopeeCoinsComponentRoutingModule } from './my-shopee-coins-component-routing.module';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { MyShopeeCoinsComponent } from './my-shopee-coins/my-shopee-coins.component';


@NgModule({
  declarations: [
    MyShopeeCoinsComponent,
  ],
  imports: [
    CommonModule,
    MyShopeeCoinsComponentRoutingModule,
    AllSvgModule,
  ]
})
export class MyShopeeCoinsComponentModule { }
