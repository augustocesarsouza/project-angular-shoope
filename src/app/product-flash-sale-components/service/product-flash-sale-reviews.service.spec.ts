import { TestBed } from '@angular/core/testing';

import { ProductFlashSaleReviewsService } from './product-flash-sale-reviews.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductFlashSaleReviewsService', () => {
  let service: ProductFlashSaleReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
                  providers: [ProductFlashSaleReviewsService],
                });
    service = TestBed.inject(ProductFlashSaleReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
