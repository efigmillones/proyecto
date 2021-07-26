import { TestBed } from '@angular/core/testing';

import { ServConectService } from './serv-conect.service';

describe('ServConectService', () => {
  let service: ServConectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServConectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
