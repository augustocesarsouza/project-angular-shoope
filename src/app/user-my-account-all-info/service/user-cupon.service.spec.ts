import { TestBed } from '@angular/core/testing';

import { UserCuponService } from './user-cupon.service';

describe('UserCuponService', () => {
  let service: UserCuponService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCuponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
