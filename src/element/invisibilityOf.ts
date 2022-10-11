import type { StringOrElement } from './../utils/element.types'
import { getElement } from '../utils/index.js'

/**
 * A condition for checking the element to be invisible
 *
 * @example
 * browser.waitUntil(invisibilityOf('.header'));
 *
 * @param {!string | ChainablePromiseElement<WebdriverIO.Element>} selectorOrElement The selector or element to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element is invisible.
 */

export function invisibilityOf(selectorOrElement: StringOrElement): () => Promise<boolean> {
  return async function (): Promise<boolean> {
    try {
      const element = await getElement(selectorOrElement)
      const isVisible = await element.isDisplayed()

      return !isVisible
    } catch {
      return true
    }
  }
}
