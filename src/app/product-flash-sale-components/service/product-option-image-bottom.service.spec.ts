import { TestBed } from '@angular/core/testing';

import { ProductOptionImageBottomService } from './product-option-image-bottom.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductOptionImageBottomService', () => {
  let service: ProductOptionImageBottomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [ProductOptionImageBottomService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(ProductOptionImageBottomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
