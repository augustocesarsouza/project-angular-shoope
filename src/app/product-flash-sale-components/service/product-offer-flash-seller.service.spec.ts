import { TestBed } from '@angular/core/testing';

import { ProductOfferFlashSellerService } from './product-offer-flash-seller.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductOfferFlashSellerService', () => {
  let service: ProductOfferFlashSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [ProductOfferFlashSellerService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(ProductOfferFlashSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
