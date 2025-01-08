import { TestBed } from '@angular/core/testing';
import { PromotionUserService } from './promotion-user.service';


describe('PromotionService', () => {
  let service: PromotionUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
