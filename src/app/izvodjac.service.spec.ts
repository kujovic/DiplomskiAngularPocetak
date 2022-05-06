import { TestBed } from '@angular/core/testing';

import { IzvodjacService } from './izvodjac.service';

describe('IzvodjacService', () => {
  let service: IzvodjacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IzvodjacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
