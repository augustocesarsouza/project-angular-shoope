import { TestBed } from '@angular/core/testing';

import { ProductOfferFlashTypeService } from './product-offer-flash-type.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductOfferFlashTypeService', () => {
  let service: ProductOfferFlashTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [ProductOfferFlashTypeService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(ProductOfferFlashTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
