import { TestBed } from '@angular/core/testing';

import { ProductOfferFlashDetailsService } from './product-offer-flash-details.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductOfferFlashDetailsService', () => {
  let service: ProductOfferFlashDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [ProductOfferFlashDetailsService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(ProductOfferFlashDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
