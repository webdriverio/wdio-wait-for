import type { ChainablePromiseElement } from 'webdriverio';

export const getElement = async (
  selectorOrElement: string | ChainablePromiseElement<Promise<WebdriverIO.Element>>,
): Promise<WebdriverIO.Element> => {
  return typeof selectorOrElement === 'string' ? await $(selectorOrElement) : await selectorOrElement;
};
