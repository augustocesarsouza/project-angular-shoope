import { TestBed } from '@angular/core/testing';

import { AddressService } from './address.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsOfferFlashService } from '../../home-page/service/products-offer-flash.service';

describe('AddressService', () => {
  let service: AddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [ProductsOfferFlashService],
        });
    service = TestBed.inject(AddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
