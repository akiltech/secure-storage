import { InjectionToken } from '@angular/core';
import { SecureStorageConfig } from './interfaces/config.interface';

/**
 * Define injectionToken.
 */
export const CRYPT_CONFIG = new InjectionToken<SecureStorageConfig>(
  'CryptConfig'
);
