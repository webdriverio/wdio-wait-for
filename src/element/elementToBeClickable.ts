/**
 * A condition for checking an element is visible and clickable
 *
 * @example
 * browser.waitUntil(elementToBeClickable('.links'));
 *
 * @param {!string} selector The selector to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element is clickable.
 */

export function elementToBeClickable(selector: string): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const element = await $(selector);

    return await element.isClickable();
  };
}
