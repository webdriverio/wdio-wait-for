import { getElement } from './../utils';
import type { Browser } from 'webdriverio';

/**
 * A condition for checking size of element with given selector
 *
 * @example
 * browser.waitUntil(sizeOfElementsToBe('button', { width: 200, height: 200 }));
 *
 * @param {!string | WebdriverIO.Element} selectorOrElement The selector or element to check
 * @param {!{ width: number, height: number }} expectedSize The selector to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element size.
 */

export function sizeOfElementsToBe(
  selectorOrElement: string | Promise<WebdriverIO.Element>,
  expectedSize: { width: number; height: number },
): () => Promise<boolean> {
  return async function (this: Browser<'async'>): Promise<boolean> {
    const element = await getElement(selectorOrElement);
    const actualSize = await element.getSize();

    return actualSize.width === expectedSize.width && actualSize.height === expectedSize.height;
  };
}
