import { TestBed } from '@angular/core/testing';

import { FlashSaleProductAllInfoService } from './flash-sale-product-all-info.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FlashSaleProductAllInfoService', () => {
  let service: FlashSaleProductAllInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
              imports: [HttpClientTestingModule],
              providers: [FlashSaleProductAllInfoService],
            });
    service = TestBed.inject(FlashSaleProductAllInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
