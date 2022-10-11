import type { Browser } from 'webdriverio'

/**
 * A condition for checking URL of the current page to be a specific url.
 *
 * @example
 * browser.waitUntil(urlIs('https://the-internet.herokuapp.com/'));
 *
 * @param {!string} expectedUrl The expected url
 * @returns {!function} A condition that returns a promise
 *     representing whether browser's url is.
 */

export function urlIs(expectedUrl: string): () => Promise<boolean> {
  return async function (this: Browser<'async'>): Promise<boolean> {
    const actualUrl = await this.getUrl()

    return actualUrl === expectedUrl
  }
}
