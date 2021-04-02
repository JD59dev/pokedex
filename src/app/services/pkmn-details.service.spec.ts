import { TestBed } from '@angular/core/testing';

import { PkmnDetailsService } from './pkmn-details.service';

describe('PkmnDetailsService', () => {
  let service: PkmnDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PkmnDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
