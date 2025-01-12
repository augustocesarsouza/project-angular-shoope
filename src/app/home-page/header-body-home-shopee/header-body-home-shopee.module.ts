import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBodyMainComponent } from './home-body-main/home-body-main.component';
import { HeaderBodyHomeShopeeComponent } from './header-body-home-shopee/header-body-home-shopee.component';
import { CategoryItensBarComponent } from './category-components/category-itens-bar/category-itens-bar.component';
import { ItensIconComponent } from './category-components/itens-icon/itens-icon.component';
import { FlashDealsAndCountdownComponent } from './products-flash-deals-components/flash-deals-and-countdown/flash-deals-and-countdown.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { ProductFlashInfoComponent } from './products-flash-deals-components/product-flash-info/product-flash-info.component';
import { ProductFlashDealsComponent } from './products-flash-deals-components/product-flash-deals/product-flash-deals.component';

@NgModule({
  declarations: [
    HomeBodyMainComponent,
    HeaderBodyHomeShopeeComponent,
    CategoryItensBarComponent,
    ItensIconComponent,
    FlashDealsAndCountdownComponent,
    ProductFlashInfoComponent,
    ProductFlashDealsComponent
  ],
  imports: [
    CommonModule,
    AllSvgModule
  ],
  exports: [
    HomeBodyMainComponent,
    HeaderBodyHomeShopeeComponent,
  ]
})
export class HeaderBodyHomeShopeeModule { }
