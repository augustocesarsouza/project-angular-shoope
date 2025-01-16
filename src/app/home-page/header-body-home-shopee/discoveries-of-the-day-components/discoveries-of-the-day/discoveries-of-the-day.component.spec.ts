import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveriesOfTheDayComponent } from './discoveries-of-the-day.component';

describe('DiscoveriesOfTheDayComponent', () => {
  let component: DiscoveriesOfTheDayComponent;
  let fixture: ComponentFixture<DiscoveriesOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiscoveriesOfTheDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoveriesOfTheDayComponent);
    component = fixture.componentInstance;
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
    expect(imgs.length).toEqual(60);
  });

  it('should render all img-part-bottom', () => {
    const imgs = fixture.nativeElement.querySelectorAll(".img-part-bottom");
    expect(imgs.length).toEqual(60);
  });

  it('should render span discout product', () => {
    const spanDiscountProduct = fixture.nativeElement.querySelectorAll(".container-discount-product > span");
    expect(spanDiscountProduct[0].textContent).toBe("-52%");
  });

  it('should render span ad', () => {
    const spanAd = fixture.nativeElement.querySelector(".container-ad-and-span > span");
    expect(spanAd.textContent).toBe("Anúncio");
  });

  it('should render span title', () => {
    const span = fixture.nativeElement.querySelector(".container-product-discoveries-describe > span");
    expect(span.textContent).toBe("Fones De Ouvido Sem Fio TWS 5.4 Bluetooth...");
  });

  it('should render span price', () => {
    const h1 = fixture.nativeElement.querySelector(".header-price");
    const normalizedText = h1.textContent.replace(/\s+/g, ' ').trim();
    expect(normalizedText).toBe("R$ 42,99");
  });

  it('should render span sales product', () => {
    const span = fixture.nativeElement.querySelector(".container-sales-product > span");
    expect(span.textContent).toBe("175 vendidos");
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
