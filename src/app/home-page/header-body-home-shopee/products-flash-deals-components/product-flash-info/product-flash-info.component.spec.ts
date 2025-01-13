import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlashInfoComponent } from './product-flash-info.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';

describe('ProductFlashInfoComponent', () => {
  let component: ProductFlashInfoComponent;
  let fixture: ComponentFixture<ProductFlashInfoComponent>;

  const product = {
    id: "447dadf9-9eac-4895-9092-e53f017656d8",
    imgProduct: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736691104/img-flash-deals/ewbstgil2p3bbpai92rk.jpg",
    altValue: "img-wireless-controllers-portable-console",
    imgPartBottom: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729681997/img-flash-deals/br-11134258-7r98o-lzp49gh02mud40_tn_vqc0lf.png",
    priceProduct: 93.99,
    popularityPercentage: 50,
    discountPercentage: 25,

    hourFlashOffer: "09:00",
    title: "Videogame Stick 10mil 2 Controles Sem Fio Console Portatil Jogos Retro Antigo Alex",
    tagProduct: "Mais_Populares"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFlashInfoComponent],
      imports: [HttpClientModule, RouterTestingModule, AllSvgModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFlashInfoComponent);
    component = fixture.componentInstance;

    component.product = product;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render svg ray', () => {
    const svgRay = fixture.nativeElement.querySelector(".container-discount-percentage svg");
    expect(svgRay).not.toBeNull();
  });

  it('should render span discount percentage', () => {
    const spanDiscount = fixture.nativeElement.querySelector(".container-discount-percentage span");
    expect(spanDiscount.textContent).toEqual(`-${product.discountPercentage}%`);
  });

  it('should render img and your value src', () => {
    const imgProduct = fixture.nativeElement.querySelector(".container-product-img img");
    expect(imgProduct.src).toContain(product.imgProduct);
  });

  it('should render img and your value alt', () => {
    const imgProduct = fixture.nativeElement.querySelector(".container-product-img img");
    expect(imgProduct.alt).toBe(product.altValue);
  });

  it('should render img part bottom and your value src', () => {
    const imgProductBottom = fixture.nativeElement.querySelector(".img-free-shipping");
    expect(imgProductBottom.src).toBe(product.imgPartBottom);
  });

  it('should render img part bottom and your value alt', () => {
    const imgProductBottom = fixture.nativeElement.querySelector(".img-free-shipping");
    expect(imgProductBottom.alt).toBe("img-free-shipping");
  });

  it('should render header price', () => {
    const headerPrice = fixture.nativeElement.querySelector(".container-header-and-second-div h1");
    expect(headerPrice.textContent).toBe(`R$ ${product.priceProduct.toString().replace(".", ",")}`);
  });

  it('should render span popular', () => {
    const spanPopular = fixture.nativeElement.querySelector(".container-popular span");
    expect(spanPopular.textContent).toBe("POPULAR");
  });
});
