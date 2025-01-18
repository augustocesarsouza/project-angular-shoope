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
import { TipsForUsImgComponent } from './tips-for-us-img/tips-for-us-img.component';
import { CategoriesComponent } from './categories-components/categories/categories.component';
import { EachCategoryComponent } from './categories-components/each-category/each-category.component';
import { ProductHighlightsForYouComponent } from './product-highlights-components/product-highlights-for-you/product-highlights-for-you.component';
import { ProductHighlightsInfoComponent } from './product-highlights-components/product-highlights-info/product-highlights-info.component';
import { DiscoveriesOfTheDayComponent } from './discoveries-of-the-day-components/discoveries-of-the-day/discoveries-of-the-day.component';
import { FirstFooterComponent } from './footer-componenets/first-footer/first-footer.component';
import { FooterMainComponent } from './footer-componenets/footer-main/footer-main.component';
import { SecondFooterComponent } from './footer-componenets/second-footer/second-footer.component';

@NgModule({
  declarations: [
    HomeBodyMainComponent,
    HeaderBodyHomeShopeeComponent,
    CategoryItensBarComponent,
    ItensIconComponent,
    FlashDealsAndCountdownComponent,
    ProductFlashInfoComponent,
    ProductFlashDealsComponent,
    TipsForUsImgComponent,
    CategoriesComponent,
    EachCategoryComponent,
    ProductHighlightsForYouComponent,
    ProductHighlightsInfoComponent,
    DiscoveriesOfTheDayComponent,
    FirstFooterComponent,
    FooterMainComponent,
    SecondFooterComponent
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
