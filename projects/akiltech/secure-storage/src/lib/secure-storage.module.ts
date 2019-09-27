import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
/**
 * Module services.
 */
import { CryptService } from './services/crypt.service';
import { SecureSessionStorageService } from './services/secure-session-storage.service';
import { SecureLocalStorageService } from './services/secure-local-storage.service';

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

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class SecureStorageModule {
  static forRoot(config: CryptConfig): ModuleWithProviders {
    return {
      ngModule: SecureStorageModule,
      providers: [
        CryptService,
        SecureSessionStorageService,
        SecureLocalStorageService,
        { provide: CRYPT_CONFIG, useValue: config }
      ]
    };
  }
}
