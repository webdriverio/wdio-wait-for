import type { Browser } from 'webdriverio';

/**
 * A condition for checking the number of opened windows.
 *
 * @example
 * browser.waitUntil(numberOfWindowsToBe(2));
 *
 * @param {!number} expectedNumber The expected url
 * @returns {!function} A condition that returns a promise
 *     representing whether browser's windows length.
 */

export function numberOfWindowsToBe(expectedNumber: number): () => Promise<boolean> {
  return async function (this: Browser<'async'>): Promise<boolean> {
    const actualWindows = await this.getWindowHandles();

    return actualWindows.length === expectedNumber;
  };
}
