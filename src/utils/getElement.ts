import type { Element } from 'webdriverio'
import type { StringOrElement } from './../utils/element.types'

export const getElement = async (selectorOrElement: StringOrElement): Promise<Element<'async'>> => {
  return typeof selectorOrElement === 'string' ? await $(selectorOrElement) : await selectorOrElement
}
