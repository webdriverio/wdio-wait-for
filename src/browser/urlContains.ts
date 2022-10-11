import type { Browser } from 'webdriverio'

/**
 * A condition for checking the URL of the current page to contain specific text.
 *
 * @example
 * browser.waitUntil(urlContains('/v1'));
 *
 * @param {!string} expectedUrl The expected url
 * @returns {!function} A condition that returns a promise
 *     representing whether browser's url contains.
 */

export function urlContains(expectedUrl: string): () => Promise<boolean> {
  return async function (this: Browser<'async'>): Promise<boolean> {
    const actualUrl = await this.getUrl()

    return actualUrl.includes(expectedUrl)
  }
}
