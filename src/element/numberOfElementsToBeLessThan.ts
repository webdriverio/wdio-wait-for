/**
 * A condition for checking number of elements with given selector being less than defined number
 *
 * @example
 * browser.waitUntil(numberOfElementsToBeLessThan('a', 2));
 *
 * @param {!string} selector The selector to check
 * @param {!number} expectedNumber The selector to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element length is less than defined number.
 */

export function numberOfElementsToBeLessThan(selector: string, expectedNumber: number): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const element = await $$(selector);

    return element.length < expectedNumber;
  };
}
