import { TestBed } from '@angular/core/testing';

import { ProductOfferFlashDescriptionService } from './product-offer-flash-description.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductOfferFlashDescriptionService', () => {
  let service: ProductOfferFlashDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [ProductOfferFlashDescriptionService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(ProductOfferFlashDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
