import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOfferFlashDetailsComponent } from './product-offer-flash-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';

describe('ProductOfferFlashDetailsComponent', () => {
  let component: ProductOfferFlashDetailsComponent;
  let fixture: ComponentFixture<ProductOfferFlashDetailsComponent>;

  const productOfferFlashDetails = {
    details: JSON.parse("{\"Marca\":\"Malaysia Collection\",\"Estoque\":56875,\"Estoque Promocional\":1200,\"Estoque Total\":14963}"),
    detailsJson: {
      Marca: "Malaysia Collection",
      Estoque: 56875,
      EstoquePromocional: 1200,
      EstoqueTotal: 14963
    },
    id: "9f26ec7d-0fb0-4786-91ba-b5e0afe1dd6b",
    productsOfferFlashId: "8bef0a5c-fd6e-4f8b-a698-23216155b482"
  };

  const productCategories = ["Shopee", "Saúde", "Cuidados Pessoais", "Cuidados Bucais"];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductOfferFlashDetailsComponent],
       imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOfferFlashDetailsComponent);
    component = fixture.componentInstance;

    component.productOfferFlashDetails = productOfferFlashDetails;
    component.productCategories = productCategories;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header detail', () => {
    const h1 = fixture.nativeElement.querySelector('.header-detail-product');
    expect(h1.textContent).toBe("Detalhes do Produto");
  });

  it('should render span title first', () => {
    const spans = fixture.nativeElement.querySelectorAll('.span-title-category-product');
    expect(spans[0].textContent).toBe(productCategories[0]);
  });

  it('should render span title second', () => {
    const spans = fixture.nativeElement.querySelectorAll('.span-title-category-product');
    expect(spans[1].textContent).toBe(productCategories[1]);
  });

  it('should render span title third', () => {
    const spans = fixture.nativeElement.querySelectorAll('.span-title-category-product');
    expect(spans[2].textContent).toBe(productCategories[2]);
  });

  it('should render span title four', () => {
    const spans = fixture.nativeElement.querySelectorAll('.span-title-category-product');
    expect(spans[3].textContent).toBe(productCategories[3]);
  });

  it('should render header product details first', () => {
    const headers = fixture.nativeElement.querySelectorAll('.header-product-deatils');
    expect(headers[0].textContent).toBe("Marca");
    const spans = fixture.nativeElement.querySelectorAll('.span-product-details');
    expect(spans[0].textContent).toBe(productOfferFlashDetails.detailsJson.Marca);
  });

  it('should render header product details second', () => {
    const headers = fixture.nativeElement.querySelectorAll('.header-product-deatils');
    expect(headers[1].textContent).toBe("Estoque");
    const spans = fixture.nativeElement.querySelectorAll('.span-product-details');
    expect(spans[1].textContent).toBe(productOfferFlashDetails.detailsJson.Estoque.toString());
  });

  it('should render header product details third', () => {
    const headers = fixture.nativeElement.querySelectorAll('.header-product-deatils');
    expect(headers[2].textContent).toBe("EstoquePromocional");
    const spans = fixture.nativeElement.querySelectorAll('.span-product-details');
    expect(spans[2].textContent).toBe(productOfferFlashDetails.detailsJson.EstoquePromocional.toString());
  });

  it('should render header product details four', () => {
    const headers = fixture.nativeElement.querySelectorAll('.header-product-deatils');
    expect(headers[3].textContent).toBe("EstoqueTotal");
    const spans = fixture.nativeElement.querySelectorAll('.span-product-details');
    expect(spans[3].textContent).toBe(productOfferFlashDetails.detailsJson.EstoqueTotal.toString());
  });
});
