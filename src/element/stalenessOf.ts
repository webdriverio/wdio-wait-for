/**
 * A condition for checking that an element is not present on the DOM of a page
 *
 * @example
 * browser.waitUntil(stalenessOf('.header'));
 *
 * @param {!string} selector The selector to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element is not present on the DOM.
 */

export function stalenessOf(selector: string): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const element = await $(selector);

    try {
      const isVisible = await element.isExisting();

      return !isVisible;
    } catch {
      return true;
    }
  };
}
