import { TestBed } from '@angular/core/testing';

import { GetDiscoveriesOfTheDayIsOutOfViewService } from './get-discoveries-of-the-day-is-out-of-view.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('GetDiscoveriesOfTheDayIsOutOfViewService', () => {
  let service: GetDiscoveriesOfTheDayIsOutOfViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [GetDiscoveriesOfTheDayIsOutOfViewService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(GetDiscoveriesOfTheDayIsOutOfViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
