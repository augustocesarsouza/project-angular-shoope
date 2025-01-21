import { TestBed } from '@angular/core/testing';

import { ProductOptionImageBottomService } from './product-option-image-bottom.service';

describe('ProductOptionImageBottomService', () => {
  let service: ProductOptionImageBottomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductOptionImageBottomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
