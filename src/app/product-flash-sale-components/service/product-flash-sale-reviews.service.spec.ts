import { TestBed } from '@angular/core/testing';

import { ProductFlashSaleReviewsService } from './product-flash-sale-reviews.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductFlashSaleReviewsService', () => {
  let service: ProductFlashSaleReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [ProductFlashSaleReviewsService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(ProductFlashSaleReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
