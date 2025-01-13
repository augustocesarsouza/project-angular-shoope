import { TestBed } from '@angular/core/testing';
import { PromotionUserService } from './promotion-user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsOfferFlashService } from '../../home-page/service/products-offer-flash.service';


describe('PromotionService', () => {
  let service: PromotionUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [ProductsOfferFlashService],
        });
    service = TestBed.inject(PromotionUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
