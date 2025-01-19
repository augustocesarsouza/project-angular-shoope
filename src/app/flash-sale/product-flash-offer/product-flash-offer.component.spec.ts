import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlashOfferComponent } from './product-flash-offer.component';
import { ProductFlashDeals } from '../../login-and-register-user/interface/product-flash-deals';
import {  functionForPriceMainWithDiscount, functionForPriceOriginal, functionTitleFormat } from './function-product-flash-offer';

describe('ProductFlashOfferComponent', () => {
  let component: ProductFlashOfferComponent;
  let fixture: ComponentFixture<ProductFlashOfferComponent>;

  const obj: ProductFlashDeals = {
    altValue: "img-wireless-controllers-portable-console",
    discountPercentage: 25,
    id: "2562f0a0-c47b-4ed4-8542-abc4f78ca4be",
    imgPartBottom: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729681997/img-flash-deals/br-11134258-7r98o-lzp49gh02mud40_tn_vqc0lf.png",
    imgProduct: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736691104/img-flash-deals/ewbstgil2p3bbpai92rk.jpg",
    popularityPercentage: 50,
    priceProduct: 93.99,
    tagProduct: "Mais_Populares",
    title: "Videogame Stick 10mil 2 Controles Sem Fio Console Portatil Jogos Retro Antigo Alex",
    hourFlashOffer: "09:00"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFlashOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFlashOfferComponent);
    component = fixture.componentInstance;

    const getAllProductHourProps: ProductFlashDeals[] = [];
    getAllProductHourProps.push(obj);

    component.getAllProductHourProps = getAllProductHourProps;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product hour first img src', () => {
    const imgs = fixture.nativeElement.querySelectorAll(".container-product-hour img");
    expect(imgs[0].src).toContain(obj.imgProduct);
  });

  it('should render product hour first img alt', () => {
    const imgs = fixture.nativeElement.querySelectorAll(".container-product-hour img");
    expect(imgs[0].alt).toContain(obj.altValue);
  });

  it('should render product hour second img src', () => {
    const imgs = fixture.nativeElement.querySelectorAll(".container-product-hour img");
    expect(imgs[1].src).toContain(obj.imgPartBottom);
  });

  it('should render product hour second img alt', () => {
    const imgs = fixture.nativeElement.querySelectorAll(".container-product-hour img");
    expect(imgs[1].alt).toContain("img-part-bottom");
  });

  it('should render header title product flash', () => {
    const header = fixture.nativeElement.querySelector(".header-title-product-flash");
    expect(header.textContent).toBe(`${functionTitleFormat(obj.title)}`);
  });

  it('should render header span price', () => {
    const span = fixture.nativeElement.querySelector(".span-price-original");
    expect(span.textContent).toBe(`${functionForPriceOriginal(obj)}`);
  });

  it('should render svg lightning', () => {
    const svg = fixture.nativeElement.querySelector(".svg-lightning");
    expect(svg).not.toBeNull();
  });

  it('should render span discount percentage', () => {
    const spanDiscountPercentage = fixture.nativeElement.querySelector(".span-discount-percentage");
    expect(spanDiscountPercentage.textContent).toBe(`-${ obj.discountPercentage }%`);
  });

  it('should render span price product', () => {
    const span = fixture.nativeElement.querySelector(".span-price-product");
    expect(span.textContent).toBe(`${functionForPriceMainWithDiscount(obj.priceProduct)}`);
  });

  it('should render span popular', () => {
    const span = fixture.nativeElement.querySelector(".span-popular");
    expect(span.textContent).toBe("POPULAR");
  });

  it('should render span buy now', () => {
    const span = fixture.nativeElement.querySelector(".container-button-buy-now span");
    expect(span.textContent).toBe("Compre Agora");
  });
});
