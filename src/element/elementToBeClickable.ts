import type { StringOrElement } from './../utils/element.types'
import { getElement } from '../utils/index.js'

/**
 * A condition for checking an element is visible and clickable
 *
 * @example
 * browser.waitUntil(elementToBeClickable('.links'));
 *
 * @param {!string | ChainablePromiseElement<Element<'async'>>} selectorOrElement The selector or element to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element is clickable.
 */

export function elementToBeClickable(selectorOrElement: StringOrElement): () => Promise<boolean> {
  return async function (): Promise<boolean> {
    const element = await getElement(selectorOrElement)

    return await element.isClickable()
  }
}
