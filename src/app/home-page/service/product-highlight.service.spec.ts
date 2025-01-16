import { TestBed } from '@angular/core/testing';

import { ProductHighlightService } from './product-highlight.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductHighlightService', () => {
  let service: ProductHighlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [ProductHighlightService],
        });
    service = TestBed.inject(ProductHighlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
