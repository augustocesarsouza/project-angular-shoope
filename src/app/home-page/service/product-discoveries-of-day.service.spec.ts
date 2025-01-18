import { TestBed } from '@angular/core/testing';

import { ProductDiscoveriesOfDayService } from './product-discoveries-of-day.service';

describe('ProductDiscoveriesOfDayService', () => {
  let service: ProductDiscoveriesOfDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDiscoveriesOfDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
