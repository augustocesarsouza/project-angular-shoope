import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlashSaleSecondPartComponent } from './product-flash-sale-second-part.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { FlashSaleCountdownService } from '../../service-all-components/flash-sale-countdown.service';
import { ProductOfferFlashTypeService } from '../service/product-offer-flash-type.service';
import { UpdateImgProductFlashSaleTypeService } from '../service/update-img-product-flash-sale-type.service';
import { FlashSaleCountdownAfterClickedProductComponent } from '../flash-sale-countdown-after-clicked-product/flash-sale-countdown-after-clicked-product.component';

describe('ProductFlashSaleSecondPartComponent', () => {
  let component: ProductFlashSaleSecondPartComponent;
  let fixture: ComponentFixture<ProductFlashSaleSecondPartComponent>;

  const getFlashSaleProduct = {
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
        title: "Videogame Stick 10mil 2 Controles Sem Fio Console Portatil Jogos Retro Antigo",
        tagProduct: "dfdf",
        hourFlashOffer: "sdsd"
      },
      quantityEvaluation: 3700,
      size: "232",
      voltage: "dfdf",
      coins: 200,
      quantityPiece: 59384,
      quantitySold: 7500
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFlashSaleSecondPartComponent, FlashSaleCountdownAfterClickedProductComponent],
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      providers: [FlashSaleCountdownService, ProductOfferFlashTypeService,
        UpdateImgProductFlashSaleTypeService
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFlashSaleSecondPartComponent);
    component = fixture.componentInstance;

    component.getFlashSaleProduct = getFlashSaleProduct;
    component.productOfferFlashType = [{
      id: "99cdf6b8-74c2-4561-9b1b-b0f6ea279513",
      productsOfferFlashId: "e9080381-484f-45cd-bedc-bb2cc31b9866",
      imgProduct: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1737478143/product-offer-flash-type-java/r0wlojqlkjexrbqzw0bp.jpg",
      optionType: "Color",
      titleImg: "preto"
    }];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header value title', () => {
    const header = fixture.nativeElement.querySelector('.container-product-flash-sale-description > h1');
    expect(header.textContent.trim()).toBe("Videogame Stick 10mil 2 Controles Sem Fio Console Portatil Jogos Retro Antigo");
  });

  it('should render span rate avaliation', () => {
    const span = fixture.nativeElement.querySelector('.container-rate-avaliation-and-stars > span');
    expect(span.textContent.trim()).toBe(getFlashSaleProduct.productReviewsRate.toString());
  });

  it('should render quantity star', () => {
    const divStars = fixture.nativeElement.querySelectorAll('.container-star-main');
    expect(divStars.length).toEqual(5);
  });

  it('should render span avaliation', () => {
    const span = fixture.nativeElement.querySelector('.container-avaliation > span');
    expect(span.textContent.trim()).toBe("3,7mil");
  });

  it('should render span sold', () => {
    const span = fixture.nativeElement.querySelector('.span-sold');
    expect(span.textContent.trim()).toBe("Sold");
  });

  it('should render span report', () => {
    const span = fixture.nativeElement.querySelector('.container-report');
    expect(span.textContent.trim()).toBe("Denunciar");
  });

  it('should render span discount', () => {
    const span = fixture.nativeElement.querySelector('.span-price-with-discount');
    expect(span.textContent.trim()).toBe("R$89,00");
  });

  it('should render span original', () => {
    const span = fixture.nativeElement.querySelector('.span-price-original');
    expect(span.textContent.trim()).toBe("R$197,78");
  });

  it('should render span discount', () => {
    const span = fixture.nativeElement.querySelector('.container-discount-product > span');
    expect(span.textContent.trim()).toBe("55% OFF");
  });

  it('should render header coin', () => {
    const h1 = fixture.nativeElement.querySelector('.container-coins-insurance-color-main > h1');
    expect(h1.textContent.trim()).toBe("Moedas");
  });

  it('should render img coin', () => {
    const img = fixture.nativeElement.querySelector('.container-coins-description > img');
    expect(img.src.trim()).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1732273028/flash-offer-img/0b428b80edef1fabfd3f_thdxlz.png");
  });

  it('should render span coin', () => {
    const span = fixture.nativeElement.querySelector('.container-coins-description > span');
    expect(span.textContent).toBe(`Compre e ganhe ${getFlashSaleProduct.coins} Moeda(s) Shopee`);
  });

  it('should render span svg question mark', () => {
    const svg = fixture.nativeElement.querySelector('.container-coins-description > svg');
    expect(svg).not.toBeNull();
  });

  it('should render header card credit', () => {
    const header = fixture.nativeElement.querySelector('.container-credit-card > h1');
    expect(header.textContent).toBe(`Cartão de Crédito`);
  });

  it('should render span card credit value', () => {
    const span = fixture.nativeElement.querySelector('.container-credit-card-description > span');
    expect(span.textContent).toBe(getFlashSaleProduct.creditCard);
  });

  it('should render span installment options value', () => {
    const span = fixture.nativeElement.querySelector('.container-installment-options > span');
    expect(span.textContent).toBe("Opções de parcelamento");
  });

  it('should render span svg arrow right', () => {
    const svg = fixture.nativeElement.querySelector('.container-installment-options > svg');
    expect(svg).not.toBeNull();
  });

  it('should render header coins insurance', () => {
    const header = fixture.nativeElement.querySelector('.header-color');
    expect(header.textContent).toBe("Cor");
  });

  it('should render all divs imgs color', () => {
    const divs = fixture.nativeElement.querySelectorAll('.container-colors-all > div');
    expect(divs.length).toEqual(1);
  });

  it('should render span Insurance user', () => {
    getFlashSaleProduct.productHaveInsurance = true;
    component.getFlashSaleProduct = getFlashSaleProduct;
    fixture.detectChanges();

    const header = fixture.nativeElement.querySelector('.header-insurance');
    expect(header.textContent).toBe("Seguros");
  });

  it('should render two spans description insurance', () => {
    getFlashSaleProduct.productHaveInsurance = true;
    component.getFlashSaleProduct = getFlashSaleProduct;
    fixture.detectChanges();

    const spans = fixture.nativeElement.querySelectorAll('.container-insurance-description span');
    expect(spans.length).toEqual(2);
  });

  it('should render first span description insurance', () => {
    getFlashSaleProduct.productHaveInsurance = true;
    component.getFlashSaleProduct = getFlashSaleProduct;
    fixture.detectChanges();

    const spans = fixture.nativeElement.querySelectorAll('.container-insurance-description span');
    expect(spans[0].textContent).toBe("Seguros disponíveis");
  });

  it('should render second span description insurance', () => {
    getFlashSaleProduct.productHaveInsurance = true;
    component.getFlashSaleProduct = getFlashSaleProduct;
    fixture.detectChanges();

    const spans = fixture.nativeElement.querySelectorAll('.container-insurance-description span');
    expect(spans[1].textContent).toBe("Saber Mais");
  });

  it('should render header quantity element', () => {
    const header = fixture.nativeElement.querySelector('.header-quantity-element');
    expect(header.textContent).toBe("Quantidade");
  });

  it('should render svg menus', () => {
    const svg = fixture.nativeElement.querySelector('.svg-menus');
    expect(svg).not.toBeNull();
  });

  it('should render svg more', () => {
    const svg = fixture.nativeElement.querySelector('.svg-more');
    expect(svg).not.toBeNull();
  });

  it('should render span quantity piece', () => {
    const span = fixture.nativeElement.querySelector('.container-quantity-parts > span');
    expect(span.textContent).toBe(`${getFlashSaleProduct.quantityPiece} peças disponíveis`);
  });

  it('should render span quantity piece', () => {
    const span = fixture.nativeElement.querySelector('.button-add-to-cart > span');
    expect(span.textContent).toBe(`Adicionar ao carrinho`);
  });

  it('should render span value buy', () => {
    const span = fixture.nativeElement.querySelector('.button-buy-now > span');
    expect(span.textContent).toBe(`Comprar Agora`);
  });
});
