import { Injectable, Inject } from '@angular/core';
import { StorageInterface } from '../interfaces/storage.interface';
/**
 * Module config
 */
import { CryptConfig, CRYPT_CONFIG } from '../config';
/**
 * Vendor
 */
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
/**
 * RxJS
 */
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecureSessionStorageService implements StorageInterface {
  /**
   * Secure session storage constructor.
   *
   * @param storage
   * @param config
   */
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    @Inject(CRYPT_CONFIG) private config: CryptConfig
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
   * @returns Observable<string | null>
   */
  put(key: string, value: string): Observable<string | null> {
    return undefined;
  }
}
