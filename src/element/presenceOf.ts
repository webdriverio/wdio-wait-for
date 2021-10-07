import { getElement } from './../utils';
import {ChainablePromiseElement} from "webdriverio";

/**
 * A condition for checking that an element is present on the DOM of a page
 *
 * @example
 * browser.waitUntil(presenceOf('.header'));
 *
 * @param {!string | WebdriverIO.Element} selectorOrElement The selector or element to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element is present on the DOM.
 */

export function presenceOf(selectorOrElement: string | ChainablePromiseElement<Promise<WebdriverIO.Element>>): () => Promise<boolean> {
  return async function (): Promise<boolean> {
    try {
      const element = await getElement(selectorOrElement);
      const isVisible = await element.isExisting();

      return isVisible;
    } catch {
      return false;
    }
  };
}
