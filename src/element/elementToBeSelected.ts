/**
 * A condition for checking an element is visible and selected
 *
 * @example
 * browser.waitUntil(elementToBeSelected('.btn'));
 *
 * @param {!string} selector The selector to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element is selected.
 */

export function elementToBeSelected(selector: string): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const element = await $(selector);

    return await element.isSelected();
  };
}
