/**
 * A condition for checking an element contains a specific text
 *
 * @example
 * browser.waitUntil(elementContainsText('.home', 'Home'));
 *
 * @param {!string} selector The selector to check
 * @param {!string} expectedText The expected text to verify
 *
 * @returns {!function} A condition that returns a promise
 *     representing whether the element contains a specific text.
 */

export function elementContainsText(selector: string, expectedText: string): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const element = await $(selector);
    const text = await element.getText();

    return text.includes(expectedText);
  };
}
