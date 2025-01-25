import { TestBed } from '@angular/core/testing';

import { ProductOfferFlashDescriptionService } from './product-offer-flash-description.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductOfferFlashDescriptionService', () => {
  let service: ProductOfferFlashDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
                  providers: [ProductOfferFlashDescriptionService],
                });
    service = TestBed.inject(ProductOfferFlashDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
