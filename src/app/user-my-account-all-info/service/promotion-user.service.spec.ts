import { TestBed } from '@angular/core/testing';
import { PromotionUserService } from './promotion-user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('PromotionService', () => {
  let service: PromotionUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [PromotionUserService],
        });
    service = TestBed.inject(PromotionUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
