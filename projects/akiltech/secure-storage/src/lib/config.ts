import {InjectionToken} from '@angular/core';

/**
 * Service config.
 */
export interface CryptConfig {
  secretKey: string;
  encryptKey?: boolean;
}

/**
 * Define injectionToken.
 */
export const CRYPT_CONFIG = new InjectionToken<CryptConfig>(
  'CryptConfig'
);
