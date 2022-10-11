import type { StringOrElement } from './../utils/element.types'
import { getElement } from '../utils/index.js'

/**
 * A condition for checking an element contains a specific value
 *
 * @example
 * browser.waitUntil(textToBePresentInElementValue('input', 'password'));
 *
 * @param {!string | ChainablePromiseElement<WebdriverIO.Element>} selectorOrElement The selector or element to check
 * @param {!string} expectedValue The expected value to verify
 *
 * @returns {!function} A condition that returns a promise
 *     representing whether the element contains a specific value.
 */

export function textToBePresentInElementValue(
  selectorOrElement: StringOrElement,
  expectedValue: string,
): () => Promise<boolean> {
  return async function (): Promise<boolean> {
    const element = await getElement(selectorOrElement)
    const value = await element.getValue()

    return value.includes(expectedValue)
  }
}
