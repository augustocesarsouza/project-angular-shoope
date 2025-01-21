import { TestBed } from '@angular/core/testing';

import { UpdateImgProductFlashSaleTypeService } from './update-img-product-flash-sale-type.service';

describe('UpdateImgProductFlashSaleTypeService', () => {
  let service: UpdateImgProductFlashSaleTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateImgProductFlashSaleTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
