import { TestBed, inject } from '@angular/core/testing';

import { EventsServiceService } from './events.service';

describe('EventsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsServiceService]
    });
  });

  it('should be created', inject([EventsServiceService], (service: EventsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
