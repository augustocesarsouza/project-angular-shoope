import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashSaleRoutingModule } from './flash-sale-routing.module';
import { FlashSaleMainComponent } from './flash-sale-main/flash-sale-main.component';
import { HeaderAndFooterForAllComponentsModule } from '../header-and-footer-for-all-components/header-and-footer-for-all-components.module';
import { HomePageModule } from '../home-page/home-page.module';
import { FlashOfferAndCountdownComponent } from './flash-offer-and-countdown/flash-offer-and-countdown.component';
import { FleshOfferEveryDayAndHoursComponent } from './flesh-offer-every-day-and-hours/flesh-offer-every-day-and-hours.component';
import { FleshOfferEveryDayComponent } from './flesh-offer-every-day/flesh-offer-every-day.component';
import { CategoryToProductComponent } from './category-to-product/category-to-product.component';
import { ProductFlashOfferComponent } from './product-flash-offer/product-flash-offer.component';
import { FooterForFlashOfferComponent } from './footer-for-flash-offer/footer-for-flash-offer.component';


@NgModule({
  declarations: [
    FlashSaleMainComponent,
    FlashOfferAndCountdownComponent,
    FleshOfferEveryDayAndHoursComponent,
    FleshOfferEveryDayComponent,
    CategoryToProductComponent,
    ProductFlashOfferComponent,
    FooterForFlashOfferComponent,
  ],
  imports: [
    CommonModule,
    FlashSaleRoutingModule,
    HeaderAndFooterForAllComponentsModule,
    HomePageModule
  ]
})
export class FlashSaleModule { }
