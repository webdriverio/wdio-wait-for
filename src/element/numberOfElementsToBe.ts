/**
 * A condition for checking number of elements with given selector
 *
 * @example
 * browser.waitUntil(numberOfElementsToBe('a', 4));
 *
 * @param {!string} selector The selector to check
 * @param {!number} expectedNumber The selector to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element length.
 */

export function numberOfElementsToBe(selector: string, expectedNumber: number): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const element = await $$(selector);

    return element.length === expectedNumber;
  };
}
