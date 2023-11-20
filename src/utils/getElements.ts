import type { ChainablePromiseArray } from 'webdriverio'
import type { StringOrElements } from './element.types'

export const getElements = (selectorOrElementArray: StringOrElements): ChainablePromiseArray<WebdriverIO.ElementArray> => {
  return typeof selectorOrElementArray === 'string' ? $$(selectorOrElementArray) : selectorOrElementArray
}
