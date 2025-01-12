import { TestBed } from '@angular/core/testing';

import { ProductsOfferFlashService } from './products-offer-flash.service';

describe('ProductsOfferFlashService', () => {
  let service: ProductsOfferFlashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsOfferFlashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
