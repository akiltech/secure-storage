import { NgModule, ModuleWithProviders } from '@angular/core';
/**
 * Module services.
 */
import { CryptService } from './services/crypt.service';
import { SecureSessionStorageService } from './services/secure-session-storage.service';
import { SecureLocalStorageService } from './services/secure-local-storage.service';

import { CRYPT_CONFIG } from './config';
import { SecureStorageConfig } from './interfaces/config.interface';

@NgModule({
  declarations: [],
  imports: [],
  providers: [],
  exports: []
})
export class SecureStorageModule {
  static forRoot(config: SecureStorageConfig): ModuleWithProviders {
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
