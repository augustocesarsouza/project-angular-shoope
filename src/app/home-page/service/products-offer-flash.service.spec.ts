import { TestBed } from '@angular/core/testing';

import { ProductsOfferFlashService } from './products-offer-flash.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductsOfferFlashService', () => {
  let service: ProductsOfferFlashService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsOfferFlashService],
    });
    service = TestBed.inject(ProductsOfferFlashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
