import { TestBed } from '@angular/core/testing';

import { UpdateImgProductFlashSaleTypeService } from './update-img-product-flash-sale-type.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('UpdateImgProductFlashSaleTypeService', () => {
  let service: UpdateImgProductFlashSaleTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [UpdateImgProductFlashSaleTypeService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(UpdateImgProductFlashSaleTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
