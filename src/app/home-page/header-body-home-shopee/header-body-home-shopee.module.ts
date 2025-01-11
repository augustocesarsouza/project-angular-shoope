import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBodyMainComponent } from './home-body-main/home-body-main.component';
import { HeaderBodyHomeShopeeComponent } from './header-body-home-shopee/header-body-home-shopee.component';
import { CategoryItensBarComponent } from './category-components/category-itens-bar/category-itens-bar.component';
import { ItensIconComponent } from './category-components/itens-icon/itens-icon.component';

@NgModule({
  declarations: [
    HomeBodyMainComponent,
    HeaderBodyHomeShopeeComponent,
    CategoryItensBarComponent,
    ItensIconComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeBodyMainComponent,
    HeaderBodyHomeShopeeComponent,
  ]
})
export class HeaderBodyHomeShopeeModule { }
