import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlashSaleMainComponent } from './product-flash-sale-main.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FlashSaleProductAllInfoService } from '../service/flash-sale-product-all-info.service';
import { HeaderMainComponent } from '../../home-page/header-main/header-main.component';
import { HeaderFirstComponent } from '../../home-page/header-first/header-first.component';
import { HeaderSecondComponent } from '../../home-page/header-second/header-second.component';
import { DownloadAppFloatingComponent } from '../../home-page/download-app-floating/download-app-floating.component';
import { NameUserFloatingComponent } from '../../home-page/name-user-floating/name-user-floating.component';
import { LanguageFloatingComponent } from '../../home-page/language-floating/language-floating.component';
import { NotificationFloatingComponent } from '../../home-page/notification-floating/notification-floating.component';
import { ProductFlashSaleAllInfoComponent } from '../product-flash-sale-all-info/product-flash-sale-all-info.component';
import { ProductFlashSaleFirstPartComponent } from '../product-flash-sale-first-part/product-flash-sale-first-part.component';
import { ProductFlashSaleSecondPartComponent } from '../product-flash-sale-second-part/product-flash-sale-second-part.component';
import { FlashSaleCountdownAfterClickedProductComponent } from '../flash-sale-countdown-after-clicked-product/flash-sale-countdown-after-clicked-product.component';
import { UserSellerProductOfferFlashComponent } from '../user-seller-product-offer-flash/user-seller-product-offer-flash.component';
import { ProductOfferFlashDetailsComponent } from '../product-offer-flash-details/product-offer-flash-details.component';

describe('ProductFlashSaleMainComponent', () => {
  let component: ProductFlashSaleMainComponent;
  let fixture: ComponentFixture<ProductFlashSaleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFlashSaleMainComponent, HeaderMainComponent, HeaderFirstComponent,
        HeaderSecondComponent, DownloadAppFloatingComponent, NameUserFloatingComponent,
        LanguageFloatingComponent, NotificationFloatingComponent, ProductFlashSaleAllInfoComponent,
        ProductFlashSaleFirstPartComponent, ProductFlashSaleSecondPartComponent,
        FlashSaleCountdownAfterClickedProductComponent, UserSellerProductOfferFlashComponent, ProductOfferFlashDetailsComponent
      ],
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      providers: [FlashSaleProductAllInfoService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFlashSaleMainComponent);
    component = fixture.componentInstance;

    component.getFlashSaleProduct = {
      id: "e20b65d3-e53f-4347-b91e-a13adde46099",
      creditCard: "12x R$8,64",
      favoriteQuantity: 8.2,
      productHaveInsurance: false,
      productReviewsRate: 4.8,
      productsOfferFlashId: "dsdsdsd",
      productsOfferFlashDTO: {
        altValue: "img-video-game-stick-wireless",
        discountPercentage: 55,
        popularityPercentage: 30,
        id: "8bef0a5c-fd6e-4f8b-a698-23216155b482",
        imgPartBottom: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729681997/img-flash-deals/br-11134258-7r98o-lzp49gh02mud40_tn_vqc0lf.png",
        imgProduct: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736691656/img-flash-deals/mf9pfcuvozhzr6uw1us1.jpg",
        priceProduct: 89,
        title: "Videogame Stick 10mil 2 Controles Sem Fio Console Portatil J",
        tagProduct: "dfdf",
        hourFlashOffer: "sdsd"
      },
      quantityEvaluation: 3.7,
      size: "232",
      voltage: "dfdf",
      coins: 200,
      quantityPiece: 59384,
      quantitySold: 7500
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render spans four elements', () => {
    if(fixture.nativeElement){
      const divs = fixture.nativeElement.querySelectorAll('.svg-arrow-right');
      expect(divs.length).toEqual(4);
    }
  });
});
