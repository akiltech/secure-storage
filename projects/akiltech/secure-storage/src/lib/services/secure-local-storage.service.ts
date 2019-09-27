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
   * @returns Observable<string>
   */
  get(key: string): Observable<string> {
    return undefined;
  }

  /**
   * Check storage has key.
   *
   * @param key
   *
   * @returns Observable<boolean>
   */
  has(key: string): Observable<boolean> {
    return undefined;
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

      const response = this.storage.set(
        this.config.encryptKey ? this.cryptService.encryptKey(key) : key,
        this.cryptService.encryptString(value)
      );

      return observer.next(true);
    });
  }
}
