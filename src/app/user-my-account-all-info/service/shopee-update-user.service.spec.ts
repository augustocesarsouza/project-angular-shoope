import { TestBed } from '@angular/core/testing';

import { ShopeeUpdateUserService } from './shopee-update-user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShopeeUpdateUserService', () => {
  let service: ShopeeUpdateUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [ShopeeUpdateUserService],
        });
    service = TestBed.inject(ShopeeUpdateUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
