import { getElements } from './../utils';
import {ChainablePromiseArray} from "webdriverio";

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
  selectorOrElementArray: string | ChainablePromiseArray<WebdriverIO.ElementArray>,
  expectedNumber: number,
): () => Promise<boolean> {
  return async function (): Promise<boolean> {
    const elements = await getElements(selectorOrElementArray);

    return elements.length > expectedNumber;
  };
}
