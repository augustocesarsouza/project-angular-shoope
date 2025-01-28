import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AllSvgModule } from './all-svg/all-svg.module';
import { HomePageModule } from './home-page/home-page.module';
import { ProductFlashSaleMainComponent } from './product-flash-sale-components/product-flash-sale-main/product-flash-sale-main.component';
import { ProductFlashSaleAllInfoComponent } from './product-flash-sale-components/product-flash-sale-all-info/product-flash-sale-all-info.component';
import { ProductFlashSaleFirstPartComponent } from './product-flash-sale-components/product-flash-sale-first-part/product-flash-sale-first-part.component';
import { ProductFlashSaleSecondPartComponent } from './product-flash-sale-components/product-flash-sale-second-part/product-flash-sale-second-part.component';
import { FlashSaleCountdownAfterClickedProductComponent } from './product-flash-sale-components/flash-sale-countdown-after-clicked-product/flash-sale-countdown-after-clicked-product.component';
import { UserSellerProductOfferFlashComponent } from './product-flash-sale-components/user-seller-product-offer-flash/user-seller-product-offer-flash.component';
import { ProductOfferFlashDetailsComponent } from './product-flash-sale-components/product-offer-flash-details/product-offer-flash-details.component';
import { ProductOfferFlashDescriptionComponent } from './product-flash-sale-components/product-offer-flash-description/product-offer-flash-description.component';
import { ProductFleshSaleReviewsComponent } from './product-flash-sale-components/product-flesh-sale-reviews/product-flesh-sale-reviews.component';
import { EachReviewsInnerComponent } from './product-flash-sale-components/each-reviews-inner/each-reviews-inner.component';
import { FirstRateAvaliationComponent } from './product-flash-sale-components/first-rate-avaliation/first-rate-avaliation.component';
import { CoinsCreditCardPriceProductComponent } from './product-flash-sale-components/coins-credit-card-price-product/coins-credit-card-price-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFlashSaleMainComponent,
    ProductFlashSaleAllInfoComponent,
    ProductFlashSaleFirstPartComponent,
    ProductFlashSaleSecondPartComponent,
    FlashSaleCountdownAfterClickedProductComponent,
    UserSellerProductOfferFlashComponent,
    ProductOfferFlashDetailsComponent,
    ProductOfferFlashDescriptionComponent,
    ProductFleshSaleReviewsComponent,
    EachReviewsInnerComponent,
    FirstRateAvaliationComponent,
    CoinsCreditCardPriceProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AllSvgModule,
    HomePageModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
