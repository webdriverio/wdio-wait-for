/**
 * A condition for checking an element contains a specific value
 *
 * @example
 * browser.waitUntil(textToBePresentInElementValue('input', 'password'));
 *
 * @param {!string} selector The selector to check
 * @param {!string} expectedValue The expected value to verify
 *
 * @returns {!function} A condition that returns a promise
 *     representing whether the element contains a specific value.
 */

export function textToBePresentInElementValue(selector: string, expectedValue: string): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const element = await $(selector);
    const value = await element.getValue();

    return value.includes(expectedValue);
  };
}
