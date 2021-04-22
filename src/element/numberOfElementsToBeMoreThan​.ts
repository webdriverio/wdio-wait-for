/**
 * A condition for checking number of elements with given selector being more than defined number
 *
 * @example
 * browser.waitUntil(numberOfElementsToBeMoreThan​('a', 4));
 *
 * @param {!string | WebdriverIO.ElementArray} selectorOrElementArray The selector or elements array to check
 * @param {!number} expectedNumber The selector to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element length is greater than defined number.
 */

export function numberOfElementsToBeMoreThan(
  selectorOrElementArray: string | Promise<WebdriverIO.ElementArray>,
  expectedNumber: number,
): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const elements =
      typeof selectorOrElementArray === 'string' ? await $$(selectorOrElementArray) : await selectorOrElementArray;

    return elements.length > expectedNumber;
  };
}
