/**
 * A condition for checking number of elements with given selector being more than defined number
 *
 * @example
 * browser.waitUntil(numberOfElementsToBeMoreThan​('a', 4));
 *
 * @param {!string} selector The selector to check
 * @param {!number} expectedNumber The selector to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element length is greater than defined number.
 */

export function numberOfElementsToBeMoreThan(selector: string, expectedNumber: number): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const element = await $$(selector);

    return element.length > expectedNumber;
  };
}
