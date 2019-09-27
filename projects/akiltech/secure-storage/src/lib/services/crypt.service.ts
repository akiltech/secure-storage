import { Injectable, Inject } from '@angular/core';
/**
 * Module config.
 */
import { CryptConfig, CRYPT_CONFIG } from '../config';
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
   */
  private secretKey: string;

  /**
   * Crypt service constructor.
   *
   * @param config
   */
  constructor(@Inject(CRYPT_CONFIG) private config: CryptConfig) {
    /**
     * Set secret key.
     */
    this.secretKey = config ? config.secretKey : '3BhAPCKOBetWc4z4u76n6kdKVsZsuOZ9';
  }

  /**
   * Encrypt key
   *
   * @param key
   *
   * @returns string
   */
  encryptKey(key: string) {
    return cryptoJS.MD5(key, this.secretKey).toString();
  }

  /**
   * Encrypt string
   *
   * @param value
   *
   * @returns string
   */
  encryptString(value: string): string {
    return cryptoJS.AES.encrypt(value, this.secretKey).toString();
  }

  /**
   * Decrypt string.
   *
   * @param value
   *
   * @returns string
   */
  decryptString(value: string): string {
    return cryptoJS.AES.decrypt(value, this.secretKey).toString(cryptoJS.enc.Utf8);
  }

  /**
   * Encrypt string.
   *
   * @param value
   *
   * @returns string
   */
  encryptJson(value: string): string {
    return cryptoJS.AES.encrypt(JSON.stringify(value), this.secretKey).toString();
  }

  /**
   * Decrypt string.
   *
   * @param value
   *
   * @returns string
   */
  decryptJson(value: string) {
    return JSON.parse(cryptoJS.AES.decrypt(value, this.secretKey).toString(cryptoJS.enc.Utf8));
  }
}
