import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHighlightsInfoComponent } from './product-highlights-info.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductHighlightsInfoComponent', () => {
  let component: ProductHighlightsInfoComponent;
  let fixture: ComponentFixture<ProductHighlightsInfoComponent>;

  const product = {
    id: "5f22fddb-9df0-438a-8371-ee4d0db4be8a",
    imgProduct: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736969907/product-highlights-java/swckij60f3okiedrljaj.jpg",
    imgTop: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1730027355/product-highlights/Top_wicxwi.png",
    quantitySold: 62,
    title: "Esfregão"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ProductHighlightsInfoComponent],
    imports: [AllSvgModule, RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(ProductHighlightsInfoComponent);
    component = fixture.componentInstance;

    component.product = product;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img top src', () => {
    const imgTop = fixture.nativeElement.querySelector(".img-top");
    expect(imgTop).not.toBeNull();

    expect(imgTop.src).toContain(product.imgTop);
  });

  it('should render img top alt', () => {
    const imgTop = fixture.nativeElement.querySelector(".img-top");
    expect(imgTop.alt).toBe("img-top");
  });

  it('should render img main src', () => {
    const imgMain = fixture.nativeElement.querySelector(".img-main");
    expect(imgMain).not.toBeNull();

    expect(imgMain.src).toContain(product.imgProduct);
  });

  it('should render img main alt', () => {
    const imgMain = fixture.nativeElement.querySelector(".img-main");
    expect(imgMain.alt).toBe(product.title);
  });

  it('should render header monthly sales', () => {
    const header = fixture.nativeElement.querySelector(".container-product-img h1");
    expect(header.textContent).toBe(`Vendas mensais ${product.quantitySold}mil+`);
  });
});
