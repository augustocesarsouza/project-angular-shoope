import { TestBed } from '@angular/core/testing';

import { ProductsOfferFlashService } from './products-offer-flash.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductsOfferFlashService', () => {
  let service: ProductsOfferFlashService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [ProductsOfferFlashService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(ProductsOfferFlashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
