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
  return async function (this: WebdriverIO.Browser): Promise<boolean> {
    return await this.isAlertOpen()
  }
}
