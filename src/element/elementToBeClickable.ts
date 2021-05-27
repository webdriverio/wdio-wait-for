import { getElement } from './../utils';
import type { Browser } from 'webdriverio';

/**
 * A condition for checking an element is visible and clickable
 *
 * @example
 * browser.waitUntil(elementToBeClickable('.links'));
 *
 * @param {!string | WebdriverIO.Element} selectorOrElement The selector or element to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element is clickable.
 */

export function elementToBeClickable(selectorOrElement: string | Promise<WebdriverIO.Element>): () => Promise<boolean> {
  return async function (this: Browser<'async'>): Promise<boolean> {
    const element = await getElement(selectorOrElement);

    return await element.isClickable();
  };
}
