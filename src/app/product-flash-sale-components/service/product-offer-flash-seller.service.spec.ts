import { TestBed } from '@angular/core/testing';

import { ProductOfferFlashSellerService } from './product-offer-flash-seller.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductOfferFlashSellerService', () => {
  let service: ProductOfferFlashSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
                      imports: [HttpClientTestingModule],
                      providers: [ProductOfferFlashSellerService],
                    });
    service = TestBed.inject(ProductOfferFlashSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
