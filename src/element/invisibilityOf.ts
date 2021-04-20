/**
 * A condition for checking the element to be invisible
 *
 * @example
 * browser.waitUntil(invisibilityOf('.header'));
 *
 * @param {!string} selector The selector to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element is invisible.
 */

export function invisibilityOf(selector: string): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const element = await $(selector);

    try {
      const isVisible = await element.isDisplayed();

      return !isVisible;
    } catch {
      return true;
    }
  };
}
