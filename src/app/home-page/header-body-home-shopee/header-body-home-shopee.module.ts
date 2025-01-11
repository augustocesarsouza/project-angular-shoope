import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBodyMainComponent } from './home-body-main/home-body-main.component';
import { HeaderBodyHomeShopeeComponent } from './header-body-home-shopee/header-body-home-shopee.component';

@NgModule({
  declarations: [
    HomeBodyMainComponent,
    HeaderBodyHomeShopeeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeBodyMainComponent,
    HeaderBodyHomeShopeeComponent
  ]
})
export class HeaderBodyHomeShopeeModule { }
