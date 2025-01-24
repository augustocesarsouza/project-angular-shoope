import { TestBed } from '@angular/core/testing';

import { ProductOfferFlashDetailsService } from './product-offer-flash-details.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductOfferFlashDetailsService', () => {
  let service: ProductOfferFlashDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
                  providers: [ProductOfferFlashDetailsService],
                });
    service = TestBed.inject(ProductOfferFlashDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
