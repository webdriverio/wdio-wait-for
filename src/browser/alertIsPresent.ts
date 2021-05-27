import type { Browser } from 'webdriverio';

/**
 * A condition for checking an alert on the page
 *
 * @example
 * browser.waitUntil(alertIsPresent());
 *
 * @returns {!function} A condition that returns a promise
 *     representing whether an alert is present.
 */

export function alertIsPresent(): () => Promise<boolean> {
  return async function (this: Browser<'async'>): Promise<boolean> {
    return await this.isAlertOpen();
  };
}
