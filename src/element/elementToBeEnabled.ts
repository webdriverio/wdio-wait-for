/**
 * A condition for checking an element is visible and enabled such that you can click it
 *
 * @example
 * browser.waitUntil(elementToBeEnabled('.btn'));
 *
 * @param {!string | WebdriverIO.Element} selectorOrElement The selector or element to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element is enabled.
 */

export function elementToBeEnabled(selectorOrElement: string | Promise<WebdriverIO.Element>): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const element = typeof selectorOrElement === 'string' ? await $(selectorOrElement) : await selectorOrElement;

    return await element.isEnabled();
  };
}
