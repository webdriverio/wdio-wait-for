import type { StringOrElement } from './../utils/element.types'
import { getElement } from '../utils/index.js'

/**
 * A condition for checking an element is visible and enabled such that you can click it
 *
 * @example
 * browser.waitUntil(elementToBeEnabled('.btn'));
 *
 * @param {!string | ChainablePromiseElement<WebdriverIO.Element>} selectorOrElement The selector or element to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element is enabled.
 */

export function elementToBeEnabled(selectorOrElement: StringOrElement): () => Promise<boolean> {
    return async function (): Promise<boolean> {
        const element = await getElement(selectorOrElement)

        return await element.isEnabled()
    }
}
