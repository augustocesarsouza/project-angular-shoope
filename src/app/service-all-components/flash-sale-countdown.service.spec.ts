import { TestBed } from '@angular/core/testing';

import { FlashSaleCountdownService } from './flash-sale-countdown.service';

describe('FlashSaleCountdownService', () => {
  let service: FlashSaleCountdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashSaleCountdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
