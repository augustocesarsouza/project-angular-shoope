import { TestBed } from '@angular/core/testing';

import { FlashSaleProductAllInfoService } from './flash-sale-product-all-info.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('FlashSaleProductAllInfoService', () => {
  let service: FlashSaleProductAllInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [FlashSaleProductAllInfoService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(FlashSaleProductAllInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
