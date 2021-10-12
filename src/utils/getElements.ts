import {ChainablePromiseArray} from "webdriverio";

export const getElements = (
  selectorOrElementArray: string | ChainablePromiseArray<WebdriverIO.ElementArray>,
): ReturnType<WebdriverIO.Browser["$$"]> | ChainablePromiseArray<WebdriverIO.ElementArray> => {
  return typeof selectorOrElementArray === 'string' ? $$(selectorOrElementArray) : selectorOrElementArray;
};
