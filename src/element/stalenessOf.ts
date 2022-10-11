import type { StringOrElement } from './../utils/element.types'
import { getElement } from '../utils/index.js'

/**
 * A condition for checking that an element is not present on the DOM of a page
 *
 * @example
 * browser.waitUntil(stalenessOf('.header'));
 *
 * @param {!string | ChainablePromiseElement<Element<'async'>>} selectorOrElement The selector or element to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element is not present on the DOM.
 */

export function stalenessOf(selectorOrElement: StringOrElement): () => Promise<boolean> {
  return async function (): Promise<boolean> {
    try {
      const element = await getElement(selectorOrElement)
      const isVisible = await element.isExisting()

      return !isVisible
    } catch {
      return true
    }
  }
}
