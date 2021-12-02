import { TestBed } from '@angular/core/testing';

import { ZouitaService } from './zouita.service';

describe('ZouitaService', () => {
  let service: ZouitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZouitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
