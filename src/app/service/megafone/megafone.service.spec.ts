import { TestBed } from '@angular/core/testing';

import { MegafoneService } from './megafone.service';

describe('MegafoneService', () => {
  let service: MegafoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MegafoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
