import { TestBed } from '@angular/core/testing';

import { SecureLocalStorageService } from './secure-local-storage.service';

describe('SecureStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecureLocalStorageService = TestBed.get(SecureLocalStorageService);
    expect(service).toBeTruthy();
  });
});
