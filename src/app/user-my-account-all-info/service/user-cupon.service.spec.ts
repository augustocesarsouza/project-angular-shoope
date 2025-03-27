import { TestBed } from '@angular/core/testing';

import { UserCuponService } from './user-cupon.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('UserCuponService', () => {
  let service: UserCuponService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [UserCuponService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(UserCuponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
