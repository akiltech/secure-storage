import { Observable } from 'rxjs';
/**
 * Storage interface.
 */
export interface StorageInterface {
  /**
   * Put storage.
   *
   * @param key
   * @param value
   *
   * @returns Observable<any>
   */
  put(key: string, value: string): Observable<any>;

  /**
   * Check storage has key.
   *
   * @param key
   *
   * @returns Observable<boolean>
   */
  has(key: string): Observable<boolean>;

  /**
   * Get storage key value.
   *
   * @param key
   *
   * @returns Observable<string|boolean>
   */
  get(key: string): Observable<string|boolean>;

  /**
   * Destroy storage key.
   *
   * @param key
   *
   * @returns Observable<boolean>
   */
  destroy(key: string): Observable<boolean>;

  /**
   * Clean storage.
   *
   * @returns Observable<boolean>
   */
  clean(): Observable<boolean>;
}
