import type { ChainablePromiseElement } from 'webdriverio';
import { getElement } from './../utils';

/**
 * A condition for checking that an element is not present on the DOM of a page
 *
 * @example
 * browser.waitUntil(stalenessOf('.header'));
 *
 * @param {!string | WebdriverIO.Element} selectorOrElement The selector or element to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element is not present on the DOM.
 */

export function stalenessOf(
  selectorOrElement: string | ChainablePromiseElement<Promise<WebdriverIO.Element>>,
): () => Promise<boolean> {
  return async function (): Promise<boolean> {
    try {
      const element = await getElement(selectorOrElement);
      const isVisible = await element.isExisting();

      return !isVisible;
    } catch {
      return true;
    }
  };
}
