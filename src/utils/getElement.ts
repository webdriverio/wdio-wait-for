import {ChainablePromiseElement} from "webdriverio";

export const getElement = (
  selectorOrElement: string | ChainablePromiseElement<Promise<WebdriverIO.Element>>,
): ReturnType<WebdriverIO.Browser["$"]> => {
  return typeof selectorOrElement === 'string' ? $(selectorOrElement) : selectorOrElement;
};
