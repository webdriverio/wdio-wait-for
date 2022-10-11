import type { Browser } from 'webdriverio'

/**
 * A condition for checking the title of a page
 *
 * @example
 * browser.waitUntil(titleIs('Dashboard - Main page'));
 *
 * @param {!string} expectedTitle The expected title
 * @returns {!function} A condition that returns a promise
 *     representing whether browser's title is.
 */

export function titleIs(expectedTitle: string): () => Promise<boolean> {
  return async function (this: Browser<'async'>): Promise<boolean> {
    const actualTitle = await this.getTitle()

    return actualTitle === expectedTitle
  }
}
