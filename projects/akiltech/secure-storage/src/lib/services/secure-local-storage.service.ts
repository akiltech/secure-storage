import { Injectable, Inject } from '@angular/core';
import { StorageInterface } from '../interfaces/storage.interface';

/**
 * Module config.
 */
import { CryptConfig, CRYPT_CONFIG } from '../config';

/**
 * Vendor.
 */
import { CryptService } from './crypt.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

/**
 * RxJS.
 */
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecureLocalStorageService implements StorageInterface {
  /**
   * Secure local storage constructor.
   *
   * @param storage
   * @param config
   * @param cryptService
   */
  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    @Inject(CRYPT_CONFIG) private config: CryptConfig,
    private cryptService: CryptService
  ) { }

  /**
   * Clean storage.
   *
   * @returns Observable<boolean>
   */
  clean(): Observable<boolean> {
    return undefined;
  }

  /**
   * Destroy storage key.
   *
   * @param key
   *
   * @returns Observable<boolean>
   */
  destroy(key: string): Observable<boolean> {
    return undefined;
  }

  /**
   * Get storage key value.
   *
   * @param key
   *
   * @returns Observable<string|boolean>
   */
  get(key: string): Observable<string|boolean> {
    return new Observable(observer => {
      const storageKey = this.config.encryptKey ? this.cryptService.encryptKey(key) : key;

      if (!key) {
        return observer.next(false);
      }

      if (!this.storage.has(storageKey)) {
        return observer.next(false);
      }

      return observer.next(
        this.cryptService.decryptString(
          this.storage.get(storageKey)
        )
      );
    });
  }

  /**
   * Check storage has key.
   *
   * @param key
   *
   * @returns Observable<boolean>
   */
  has(key: string): Observable<boolean> {
    return new Observable(observer => {
      if (!this.storage.has(
        this.config.encryptKey ? this.cryptService.encryptKey(key) : key
      )) {
        return observer.next(false);
      }

      return observer.next(true);
    });
  }

  /**
   * Put storage.
   *
   * @param key
   * @param value
   *
   * @returns Observable<any>
   */
  put(key: string, value: string): Observable<any> {
    return new Observable(observer => {
      if (!key || !value) {
        return observer.next(false);
      }

      this.storage.set(
        this.config.encryptKey ? this.cryptService.encryptKey(key) : key,
        this.cryptService.encryptString(value)
      );

      return observer.next(true);
    });
  }
}
