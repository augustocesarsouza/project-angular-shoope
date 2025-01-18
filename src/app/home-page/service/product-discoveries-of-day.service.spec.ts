import { TestBed } from '@angular/core/testing';

import { ProductDiscoveriesOfDayService } from './product-discoveries-of-day.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductDiscoveriesOfDayService', () => {
  let service: ProductDiscoveriesOfDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
                      imports: [HttpClientTestingModule],
                      providers: [ProductDiscoveriesOfDayService],
                    });
    service = TestBed.inject(ProductDiscoveriesOfDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
