import { TestBed } from '@angular/core/testing';

import { CryptService } from './crypt.service';

describe('CryptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptService = TestBed.get(CryptService);
    expect(service).toBeTruthy();
  });
});
