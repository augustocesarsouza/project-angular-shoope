import { TestBed } from '@angular/core/testing';

import { UserCuponService } from './user-cupon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserCuponService', () => {
  let service: UserCuponService;

  beforeEach(() => {
    TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [UserCuponService],
        });
    service = TestBed.inject(UserCuponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
