import { TestBed } from '@angular/core/testing';

import { ProductHighlightService } from './product-highlight.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductHighlightService', () => {
  let service: ProductHighlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [ProductHighlightService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(ProductHighlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
