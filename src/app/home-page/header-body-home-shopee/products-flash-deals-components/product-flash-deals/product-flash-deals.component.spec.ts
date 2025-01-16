import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlashDealsComponent } from './product-flash-deals.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductFlashInfoComponent } from '../product-flash-info/product-flash-info.component';
import { ProductsOfferFlashService } from '../../../service/products-offer-flash.service';
import { of } from 'rxjs';

describe('ProductFlashDealsComponent', () => {
  let component: ProductFlashDealsComponent;
  let fixture: ComponentFixture<ProductFlashDealsComponent>;

  const mockProductsOfferFlashService = {
    GetAllProduct: jasmine.createSpy('GetAllProduct').and.returnValue(of({ data:
      [{
      id: 'f0581207-7fbb-4db8-b127-3b8ba2fac5e6',
      imgProduct: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736691104/img-flash-deals/ewbstgil2p3bbpai92rk.jpg',
      altValue: 'Image product 1',
      imgPartBottom: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729681997/img-flash-deals/br-11134258-7r98o-lzp49gh02mud40_tn_vqc0lf.png',
      priceProduct: 100,
      popularityPercentage: 50,
      discountPercentage: 20,
      hourFlashOffer: '09:00',
      title: 'Videogame Stick 10mil 2 Controles Sem Fio Console Portatil Jogos Retro Antigo Alex',
      tagProduct: 'Mais_Populares'
    }, {
      id: 'a68940f7-afb1-46c3-8bf4-1a44a1134c0a',
      imgProduct: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736691272/img-flash-deals/y4oyqozgc9qayhy9y090.jpg',
      altValue: 'Image-product-2',
      imgPartBottom: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729681997/img-flash-deals/br-11134258-7r98o-lzp49gh02mud40_tn_vqc0lf.png',
      priceProduct: 50,
      popularityPercentage: 20,
      discountPercentage: 10,
      hourFlashOffer: '09:00',
      title: 'Maquina De Barbear Aparador e Depilador de Pelos Elétrico 3 Em 1',
      tagProduct: 'Mais_Populares'
    }] }))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFlashDealsComponent, ProductFlashInfoComponent],
      providers: [{
        provide: ProductsOfferFlashService, useValue: mockProductsOfferFlashService
      }],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFlashDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render svg arrow left', () => {
    const containerArrowLeft = fixture.nativeElement.querySelector(".container-arrow-left div");
    const svgArrowLeft = containerArrowLeft.firstElementChild;

    expect(svgArrowLeft).not.toBeNull();
  });

  it('should render svg arrow right', () => {
    const containerArrowright = fixture.nativeElement.querySelector(".container-arrow-right div");
    const svgArrowright = containerArrowright.firstElementChild;

    expect(svgArrowright).not.toBeNull();
  });
});
