import { TestBed } from '@angular/core/testing';

import { CandidatesService } from './candidates.service';

describe('CandidatesService', () => {
  let service: CandidatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the candidates', () => {
    const candidates = service.getCandidates();

    candidates.subscribe(c => {
      expect(c.length).toEqual(7);
    });
  });
});
