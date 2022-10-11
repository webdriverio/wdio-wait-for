import type { ChainablePromiseArray, ElementArray } from 'webdriverio'
import type { StringOrElements } from './element.types'

export const getElements = (selectorOrElementArray: StringOrElements): ChainablePromiseArray<ElementArray> => {
  return typeof selectorOrElementArray === 'string' ? $$(selectorOrElementArray) : selectorOrElementArray
}
