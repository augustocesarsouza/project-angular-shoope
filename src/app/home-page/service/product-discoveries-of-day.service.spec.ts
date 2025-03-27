import { TestBed } from '@angular/core/testing';

import { ProductDiscoveriesOfDayService } from './product-discoveries-of-day.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductDiscoveriesOfDayService', () => {
  let service: ProductDiscoveriesOfDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [ProductDiscoveriesOfDayService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(ProductDiscoveriesOfDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
