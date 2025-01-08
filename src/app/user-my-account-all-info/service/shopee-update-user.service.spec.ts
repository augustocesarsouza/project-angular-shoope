import { TestBed } from '@angular/core/testing';

import { ShopeeUpdateUserService } from './shopee-update-user.service';

describe('ShopeeUpdateUserService', () => {
  let service: ShopeeUpdateUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopeeUpdateUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
