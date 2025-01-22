import { TestBed } from '@angular/core/testing';

import { UpdateImgProductFlashSaleTypeService } from './update-img-product-flash-sale-type.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UpdateImgProductFlashSaleTypeService', () => {
  let service: UpdateImgProductFlashSaleTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
                          imports: [HttpClientTestingModule],
                          providers: [UpdateImgProductFlashSaleTypeService],
                        });
    service = TestBed.inject(UpdateImgProductFlashSaleTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
