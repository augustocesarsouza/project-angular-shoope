import { TestBed } from '@angular/core/testing';

import { UserCuponService } from './user-cupon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsOfferFlashService } from '../../home-page/service/products-offer-flash.service';

describe('UserCuponService', () => {
  let service: UserCuponService;

  beforeEach(() => {
    TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [ProductsOfferFlashService],
        });
    service = TestBed.inject(UserCuponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
