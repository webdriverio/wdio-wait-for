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
  return async (): Promise<boolean> => {
    return await browser.isAlertOpen();
  };
}
