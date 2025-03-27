import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlashSaleFirstPartComponent } from './product-flash-sale-first-part.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { ProductOptionImageBottomService } from '../service/product-option-image-bottom.service';
import { UpdateImgProductFlashSaleTypeService } from '../service/update-img-product-flash-sale-type.service';
import { FlashSaleProductAllInfo } from '../../login-and-register-user/interface/flash-sale-product-all-info';
import { of } from 'rxjs';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductFlashSaleFirstPartComponent', () => {
  let component: ProductFlashSaleFirstPartComponent;
  let fixture: ComponentFixture<ProductFlashSaleFirstPartComponent>;

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

  const productOptionImageAll = { id: "4ca1a5ff-6fd4-4194-b0c3-d4e39e1d211d",
    productsOfferFlashId: "02f8d073-f9a3-4a20-8ad3-8f322681a52a",
    listImageUrlBottom: ["https://res.cloudinary.com/dyqsqg7pk/image/upload/v1737471922/product-option-image-java/whbpqhqzxm8hnezqokdt.jpg", "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1737471923/product-option-image-java/jrfwwz4gmkm1tr5uirg3.jpg"]
  };

  const mockProductOptionImageBottomService = {
    GetByListFlashSaleProductImageAllId: jasmine.createSpy('GetByListFlashSaleProductImageAllId').and.returnValue(of({ data: productOptionImageAll }))
    };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ProductFlashSaleFirstPartComponent],
    imports: [AllSvgModule, RouterTestingModule],
    providers: [
        {
            provide: ProductOptionImageBottomService,
            useValue: mockProductOptionImageBottomService
        },
        {
            provide: UpdateImgProductFlashSaleTypeService,
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
})
    .compileComponents();

    fixture = TestBed.createComponent(ProductFlashSaleFirstPartComponent);
    component = fixture.componentInstance;

    component.getFlashSaleProduct = product;
    component.productOptionImageAll = productOptionImageAll;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img main', () => {
    const img = fixture.nativeElement.querySelector('.img-product-main');
    expect(img.src).toContain(product.productsOfferFlashDTO.imgProduct);
  });

  it('should render img part bottom', () => {
    const img = fixture.nativeElement.querySelector('.img-part-bottom-floating');
    expect(img.src).toContain(product.productsOfferFlashDTO.imgPartBottom);
  });

  it('should render svg arrow left', () => {
    const svg = fixture.nativeElement.querySelector('.container-arrow-left svg');
    expect(svg).not.toBeNull();
  });

  it('should render all div imgs', () => {
    const divs = fixture.nativeElement.querySelectorAll('.container-all-image-part-bottom div');
    expect(divs.length).toEqual(2);
  });

  it('should render svg arrow right', () => {
    const svg = fixture.nativeElement.querySelector('.container-arrow-right svg');
    expect(svg).not.toBeNull();
  });

  it('should render h1 value share', () => {
    const header = fixture.nativeElement.querySelector('.container-to-share h1');
    expect(header.textContent).toBe("Compartilhar:");
  });

  it('should render all spans', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-to-share span');
    expect(spans.length).toEqual(4);
  });

  it('should render svg heart', () => {
    const svg = fixture.nativeElement.querySelector('.container-favorite-quantity svg');
    expect(svg).not.toBeNull();
  });

  it('should render span quantity favorite', () => {
    const span = fixture.nativeElement.querySelector('.container-favorite-quantity span');
    expect(span.textContent.trim()).toBe("Favoritar (8,2mil)");
  });
});
