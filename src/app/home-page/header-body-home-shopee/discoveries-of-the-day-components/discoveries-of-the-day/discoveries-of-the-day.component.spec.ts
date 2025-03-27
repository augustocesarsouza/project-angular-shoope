import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveriesOfTheDayComponent } from './discoveries-of-the-day.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { spanPrice, spanQuantitySold } from '../function-to-discoveries-of-the-day/function-span-quantity-sold';

// export interface ProductDiscoveriesOfTheDay {
//   id: string,
//   title: string;
//   imgProduct: string;
//   imgPartBottom: string | null;
//   discountPercentage: number | null;
//   isAd: boolean;
//   price: number;
//   quantitySold: number | null;
// }


describe('DiscoveriesOfTheDayComponent', () => {
  let component: DiscoveriesOfTheDayComponent;
  let fixture: ComponentFixture<DiscoveriesOfTheDayComponent>;

  const product = {
    id: "sodkoskd",
    title: "title1",
    imgProduct: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736691104/img-flash-deals/ewbstgil2p3bbpai92rk.jpg",
    imgPartBottom: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736691104/img-flash-deals/ewbstgil2p3bbpai92rk.jpg",
    discountPercentage: 10,
    isAd: true,
    price: 25.00,
    quantitySold: 1.500,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [DiscoveriesOfTheDayComponent],
    imports: [RouterTestingModule, AllSvgModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();

    fixture = TestBed.createComponent(DiscoveriesOfTheDayComponent);
    component = fixture.componentInstance;

    const productDiscoveriesOfTheDay = [product];

    component.productDiscoveriesOfTheDay = productDiscoveriesOfTheDay;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header', () => {
    const header = fixture.nativeElement.querySelector(".container-discoveries-of-the-day > h1");
    expect(header.textContent).toBe("DESCOBERTAS DO DIA");
  });

  it('should render all img-product', () => {
    const imgs = fixture.nativeElement.querySelectorAll(".img-product");
    expect(imgs.length).toEqual(1);
  });

  it('should render all img-part-bottom', () => {
    const imgs = fixture.nativeElement.querySelectorAll(".img-part-bottom");
    expect(imgs.length).toEqual(1);
  });

  it('should render span discout product', () => {
    const spanDiscountProduct = fixture.nativeElement.querySelectorAll(".container-discount-product > span");
    expect(spanDiscountProduct[0].textContent).toBe(`-${product.discountPercentage}%`);
  });

  it('should render span ad', () => {
    const spanAd = fixture.nativeElement.querySelector(".container-ad-and-span > span");
    expect(spanAd.textContent).toBe("Anúncio");
  });

  it('should render span title', () => {
    const span = fixture.nativeElement.querySelector(".container-product-discoveries-describe > span");
    expect(span.textContent).toBe(`${product.title}...`);
  });

  it('should render span price', () => {
    const h1 = fixture.nativeElement.querySelector(".header-price");
    const normalizedText = h1.textContent.replace(/\s+/g, ' ').trim();
    const expectedText = `${spanPrice(product.price)}`.replace(/\s+/g, ' ').trim();
    expect(normalizedText).toBe(expectedText);
  });

  it('should render span sales product', () => {
    const span = fixture.nativeElement.querySelector(".container-sales-product > span");
    expect(span.textContent).toBe(`${spanQuantitySold(product.quantitySold)} vendidos`);
  });

  it('should render button see more', () => {
    const button = fixture.nativeElement.querySelector(".container-end-button-see-more > button");
    expect(button.textContent).toBe("Ver Mais");
  });

  // it('should render img top src', () => {
  //   const imgTop = fixture.nativeElement.querySelector(".img-top");
  //   expect(imgTop).not.toBeNull();

  //   expect(imgTop.src).toContain(product.imgTop);
  // });
});
