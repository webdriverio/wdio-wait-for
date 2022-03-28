import type { StringOrElements } from './element.types';
import type { ChainablePromiseArray, ElementArray } from 'webdriverio';

export const getElements = (selectorOrElementArray: StringOrElements): ChainablePromiseArray<ElementArray> => {
  return typeof selectorOrElementArray === 'string' ? $$(selectorOrElementArray) : selectorOrElementArray;
};
