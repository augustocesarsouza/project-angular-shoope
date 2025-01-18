import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodyMainComponent } from './home-body-main.component';
import { HeaderBodyHomeShopeeComponent } from '../header-body-home-shopee/header-body-home-shopee.component';
import { CategoryItensBarComponent } from '../category-components/category-itens-bar/category-itens-bar.component';
import { FlashDealsAndCountdownComponent } from '../products-flash-deals-components/flash-deals-and-countdown/flash-deals-and-countdown.component';
import { ProductFlashDealsComponent } from '../products-flash-deals-components/product-flash-deals/product-flash-deals.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { ItensIconComponent } from '../category-components/itens-icon/itens-icon.component';
import { TipsForUsImgComponent } from '../tips-for-us-img/tips-for-us-img.component';
import { CategoriesComponent } from '../categories-components/categories/categories.component';
import { EachCategoryComponent } from '../categories-components/each-category/each-category.component';
import { ProductHighlightsForYouComponent } from '../product-highlights-components/product-highlights-for-you/product-highlights-for-you.component';
import { DiscoveriesOfTheDayComponent } from '../discoveries-of-the-day-components/discoveries-of-the-day/discoveries-of-the-day.component';
import { FooterMainComponent } from '../footer-componenets/footer-main/footer-main.component';

describe('HomeBodyMainComponent', () => {
  let component: HomeBodyMainComponent;
  let fixture: ComponentFixture<HomeBodyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBodyMainComponent, HeaderBodyHomeShopeeComponent, CategoryItensBarComponent, FlashDealsAndCountdownComponent, ProductFlashDealsComponent, ItensIconComponent, TipsForUsImgComponent, CategoriesComponent, EachCategoryComponent, ProductHighlightsForYouComponent, DiscoveriesOfTheDayComponent, FooterMainComponent],
      imports: [HttpClientModule, RouterTestingModule, AllSvgModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBodyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
