import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlashSaleAllInfoComponent } from './product-flash-sale-all-info.component';
import { ProductFlashSaleFirstPartComponent } from '../product-flash-sale-first-part/product-flash-sale-first-part.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { ProductFlashSaleSecondPartComponent } from '../product-flash-sale-second-part/product-flash-sale-second-part.component';
import { FlashSaleProductAllInfo } from '../../login-and-register-user/interface/flash-sale-product-all-info';
import { FlashSaleCountdownAfterClickedProductComponent } from '../flash-sale-countdown-after-clicked-product/flash-sale-countdown-after-clicked-product.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductFlashSaleAllInfoComponent', () => {
  let component: ProductFlashSaleAllInfoComponent;
  let fixture: ComponentFixture<ProductFlashSaleAllInfoComponent>;

  const product: FlashSaleProductAllInfo = {
      coins: 200,
      creditCard: "12x R$8,64",
      favoriteQuantity: 8.2,
      id: "e20b65d3-e53f-4347-b91e-a13adde46099",
      productHaveInsurance: false,
      productReviewsRate: 4.8,
      productsOfferFlashDTO: {
        altValue: "img-video-game-stick-wireless",
        discountPercentage: 55,
        popularityPercentage: 20,
        id: "8bef0a5c-fd6e-4f8b-a698-23216155b482",
        imgPartBottom: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729681997/img-flash-deals/br-11134258-7r98o-lzp49gh02mud40_tn_vqc0lf.png",
        imgProduct: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736691656/img-flash-deals/mf9pfcuvozhzr6uw1us1.jpg",
        priceProduct: 89,
        title: "Videogame Stick 10mil 2 Controles Sem Fio Console Portatil Jogos Retro Antigo",
        tagProduct: "sdsd",
        hourFlashOffer: "dfdfdfdf"
      },
      quantityEvaluation: 3.7,
      quantityPiece: 59384,
      quantitySold: 7500,
      productsOfferFlashId: "random-id-123", // Substitua pelo valor real
      voltage: "110V", // Substitua pelo valor real
      size: "Compacto" // Substitua pelo valor real
    };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ProductFlashSaleAllInfoComponent, ProductFlashSaleFirstPartComponent, ProductFlashSaleSecondPartComponent,
        FlashSaleCountdownAfterClickedProductComponent
    ],
    imports: [AllSvgModule, RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(ProductFlashSaleAllInfoComponent);
    component = fixture.componentInstance;

    component.getFlashSaleProduct = product;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
