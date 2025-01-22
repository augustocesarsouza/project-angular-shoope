import { TestBed } from '@angular/core/testing';

import { ProductOfferFlashTypeService } from './product-offer-flash-type.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductOfferFlashTypeService', () => {
  let service: ProductOfferFlashTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
                  providers: [ProductOfferFlashTypeService],
                });
    service = TestBed.inject(ProductOfferFlashTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
