import type { StringOrElements } from './../utils/element.types'
import { getElements } from '../utils/index.js'

/**
 * A condition for checking number of elements with given selector being less than defined number
 *
 * @example
 * browser.waitUntil(numberOfElementsToBeLessThan('a', 2));
 *
 * @param {!string | ChainablePromiseArray<WebdriverIO.ElementArray>} selectorOrElementArray The selector or elements array to check
 * @param {!number} expectedNumber The selector to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element length is less than defined number.
 */

export function numberOfElementsToBeLessThan(
    selectorOrElementArray: StringOrElements,
    expectedNumber: number,
): () => Promise<boolean> {
    return async function (): Promise<boolean> {
        const elements = await getElements(selectorOrElementArray)

        return elements.length < expectedNumber
    }
}
