import { Injectable, Inject } from '@angular/core';
import { CryptConfig, CRYPT_CONFIG } from '../secure-storage.module';
/**
 * Tiers part.
 */
import * as cryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptService {
  /**
   * Secret key
   *
   * @type {string}
   */
  private secretKey: string;

  /**
   * Crypt service constructor.
   *
   * @param {CryptConfig} config
   */
  constructor(@Inject(CRYPT_CONFIG) private config: CryptConfig) {
    /**
     * Set secret key.
     *
     * @type {string}
     */
    this.secretKey = config ? config.secretKey : '3BhAPCKOBetWc4z4u76n6kdKVsZsuOZ9';
  }

  /**
   * Encrypt key
   *
   * @param {string} key
   * @returns {string}
   */
  static encryptKey(key: string) {
    return cryptoJS.MD5(key, this.secretKey).toString();
  }

  /**
   * Encrypt string
   *
   * @returns {string}
   * @param value
   */
  static encryptString(value: string) {
    return cryptoJS.AES.encrypt(value, this.secretKey).toString();
  }

  /**
   * Decrypt string
   *
   * @param {string} value
   * @returns {string}
   */
  static decryptString(value: string) {
    return cryptoJS.AES.decrypt(value, this.secretKey).toString(cryptoJS.enc.Utf8);
  }

  /**
   * Encrypt string
   *
   * @returns {string}
   * @param value
   */
  static encryptJson(value: string) {
    return cryptoJS.AES.encrypt(JSON.stringify(value), this.secretKey).toString();
  }

  /**
   * Decrypt string
   *
   * @param {string} value
   * @returns {string}
   */
  static decryptJson(value: string) {
    return JSON.parse(cryptoJS.AES.decrypt(value, this.secretKey).toString(cryptoJS.enc.Utf8));
  }
}
