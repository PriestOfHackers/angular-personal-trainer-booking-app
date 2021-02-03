import { TestBed } from '@angular/core/testing';

import { SessionBookingService } from './session-booking.service';

describe('SessionBookingService', () => {
  let service: SessionBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
