/**
 * A condition for checking an element contains a specific value
 *
 * @example
 * browser.waitUntil(textToBePresentInElementValue('input', 'password'));
 *
 * @param {!string | WebdriverIO.Element} selectorOrElement The selector or element to check
 * @param {!string} expectedValue The expected value to verify
 *
 * @returns {!function} A condition that returns a promise
 *     representing whether the element contains a specific value.
 */

export function textToBePresentInElementValue(
  selectorOrElement: string | Promise<WebdriverIO.Element>,
  expectedValue: string,
): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const element = typeof selectorOrElement === 'string' ? await $(selectorOrElement) : await selectorOrElement;
    const value = await element.getValue();

    return value.includes(expectedValue);
  };
}
