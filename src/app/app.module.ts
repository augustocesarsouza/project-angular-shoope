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
