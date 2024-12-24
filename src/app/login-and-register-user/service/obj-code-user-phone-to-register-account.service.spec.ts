import { TestBed } from '@angular/core/testing';

import { ObjCodeUserPhoneToRegisterAccountService } from './obj-code-user-phone-to-register-account.service';

describe('ObjCodeUserPhoneToRegisterAccountService', () => {
  let service: ObjCodeUserPhoneToRegisterAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjCodeUserPhoneToRegisterAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
