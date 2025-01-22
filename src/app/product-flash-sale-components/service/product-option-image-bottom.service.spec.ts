import { TestBed } from '@angular/core/testing';

import { ProductOptionImageBottomService } from './product-option-image-bottom.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductOptionImageBottomService', () => {
  let service: ProductOptionImageBottomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
                      imports: [HttpClientTestingModule],
                      providers: [ProductOptionImageBottomService],
                    });
    service = TestBed.inject(ProductOptionImageBottomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
