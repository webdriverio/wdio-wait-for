/**
 * A condition for checking that the title contains a case-sensitive substring
 *
 * @example
 * browser.waitUntil(titleContains('Dashboard'));
 *
 * @param {!string} expectedTitle The expected title
 * @returns {!function} A condition that returns a promise
 *     representing whether browser's title contains.
 */

export function titleContains(expectedTitle: string): () => Promise<boolean> {
  return async function (this: WebdriverIO.Browser): Promise<boolean> {
    const actualTitle = await this.getTitle()

    return actualTitle.includes(expectedTitle)
  }
}
