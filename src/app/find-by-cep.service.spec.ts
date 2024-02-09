import { TestBed } from '@angular/core/testing';

import { FindByCepService } from './find-by-cep.service';

describe('FindByCepService', () => {
  let service: FindByCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindByCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
