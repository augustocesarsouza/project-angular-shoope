import { TestBed } from '@angular/core/testing';
import { PromotionUserService } from './promotion-user.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


describe('PromotionService', () => {
  let service: PromotionUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [PromotionUserService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(PromotionUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
