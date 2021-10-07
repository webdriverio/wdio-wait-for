import {ChainablePromiseArray} from "webdriverio";

export const getElements = (
  selectorOrElementArray: string | ChainablePromiseArray<Promise<WebdriverIO.ElementArray>>,
): ReturnType<WebdriverIO.Browser["$$"]> | ChainablePromiseArray<Promise<WebdriverIO.ElementArray>> => {
  return typeof selectorOrElementArray === 'string' ? $$(selectorOrElementArray) : selectorOrElementArray;
};
