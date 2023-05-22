import { TestBed } from '@angular/core/testing';

import { MenuEsquerdoService } from './menu-esquerdo.service';

describe('MenuEsquerdoService', () => {
  let service: MenuEsquerdoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuEsquerdoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
