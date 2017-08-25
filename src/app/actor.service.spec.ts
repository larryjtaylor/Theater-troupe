import { TestBed, inject } from '@angular/core/testing';

import { ActorService } from './actor.service';

describe('ActorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActorService]
    });
  });

  it('should ...', inject([ActorService], (service: ActorService) => {
    expect(service).toBeTruthy();
  }));
});
