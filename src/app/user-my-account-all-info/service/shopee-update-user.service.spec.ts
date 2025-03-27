import { TestBed } from '@angular/core/testing';

import { ShopeeUpdateUserService } from './shopee-update-user.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ShopeeUpdateUserService', () => {
  let service: ShopeeUpdateUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [ShopeeUpdateUserService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(ShopeeUpdateUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
