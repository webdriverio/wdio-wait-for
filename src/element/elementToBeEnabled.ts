/**
 * A condition for checking an element is visible and enabled such that you can click it
 *
 * @example
 * browser.waitUntil(elementToBeEnabled('.btn'));
 *
 * @param {!string} selector The selector to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element is enabled.
 */

export function elementToBeEnabled(selector: string): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const element = await $(selector);

    return await element.isEnabled();
  };
}
