import { TestBed } from '@angular/core/testing';

import { SecureSessionStorageService } from './secure-session-storage.service';

describe('SecureSessionStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecureSessionStorageService = TestBed.get(SecureSessionStorageService);
    expect(service).toBeTruthy();
  });
});
