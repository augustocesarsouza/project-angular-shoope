import { TestBed } from '@angular/core/testing';

import { GetDiscoveriesOfTheDayIsOutOfViewService } from './get-discoveries-of-the-day-is-out-of-view.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetDiscoveriesOfTheDayIsOutOfViewService', () => {
  let service: GetDiscoveriesOfTheDayIsOutOfViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
                  imports: [HttpClientTestingModule],
                  providers: [GetDiscoveriesOfTheDayIsOutOfViewService],
                });
    service = TestBed.inject(GetDiscoveriesOfTheDayIsOutOfViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
