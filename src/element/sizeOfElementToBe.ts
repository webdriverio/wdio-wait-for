/**
 * A condition for checking size of element with given selector
 *
 * @example
 * browser.waitUntil(sizeOfElementsToBe('button', { width: 200, height: 200 }));
 *
 * @param {!string} selector The selector to check
 * @param {!{ width: number, height: number }} expectedSize The selector to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element size.
 */

export function sizeOfElementsToBe(
  selector: string,
  expectedSize: { width: number; height: number },
): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const element = await $(selector);
    const actualSize = await element.getSize();

    return actualSize.width === expectedSize.width && actualSize.height === expectedSize.height;
  };
}
