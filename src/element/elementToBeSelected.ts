import type { StringOrElement } from './../utils/element.types'
import { getElement } from '../utils/index.js'

/**
 * A condition for checking an element is visible and selected
 *
 * @example
 * browser.waitUntil(elementToBeSelected('.btn'));
 *
 * @param {!string | ChainablePromiseElement<WebdriverIO.Element>} selectorOrElement The selector or element to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element is selected.
 */

export function elementToBeSelected(selectorOrElement: StringOrElement): () => Promise<boolean> {
  return async function (): Promise<boolean> {
    const element = await getElement(selectorOrElement)

    return await element.isSelected()
  }
}
