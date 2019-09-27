import { Observable } from 'rxjs';
/**
 * Storage interface.
 */
export interface StorageInterface {
  /**
   * Put storage.
   *
   * @param {string} key
   * @param {string} value
   *
   * @returns {Observable<string | null>}
   */
  put(key: string, value: string): Observable<string | null>;

  /**
   * Check storage has key.
   *
   * @param {string} key
   *
   * @returns {Observable<boolean>}
   */
  has(key: string): Observable<boolean>;

  /**
   * Get storage key value.
   *
   * @param {string} key
   *
   * @returns {Observable<string>}
   */
  get(key: string): Observable<string>;

  /**
   * Destroy storage key.
   *
   * @param {string} key
   *
   * @returns {Observable<boolean>}
   */
  destroy(key: string): Observable<boolean>;

  /**
   * Clean storage.
   *
   * @returns {Observable<boolean>}
   */
  clean(): Observable<boolean>;
}
