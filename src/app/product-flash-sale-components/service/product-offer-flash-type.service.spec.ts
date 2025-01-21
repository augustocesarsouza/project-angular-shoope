import { TestBed } from '@angular/core/testing';

import { ProductOfferFlashTypeService } from './product-offer-flash-type.service';

describe('ProductOfferFlashTypeService', () => {
  let service: ProductOfferFlashTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductOfferFlashTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
