import type { ChainablePromiseArray } from 'webdriverio';

export const getElements = (
  selectorOrElementArray: string | ChainablePromiseArray<WebdriverIO.ElementArray>,
): ChainablePromiseArray<WebdriverIO.ElementArray> => {
  return typeof selectorOrElementArray === 'string' ? $$(selectorOrElementArray) : selectorOrElementArray;
};
