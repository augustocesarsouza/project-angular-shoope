import { TestBed } from '@angular/core/testing';

import { UpdateNumberUrlMyAccountService } from './update-number-url-my-account.service';

describe('UpdateNumberUrlMyAccountService', () => {
  let service: UpdateNumberUrlMyAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateNumberUrlMyAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
