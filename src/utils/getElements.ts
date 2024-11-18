import type { StringOrElements } from './element.types'

export const getElements = (selectorOrElementArray: StringOrElements): Promise<WebdriverIO.ElementArray> => {
    return typeof selectorOrElementArray === 'string'
        ? $$(selectorOrElementArray).getElements()
        : selectorOrElementArray.getElements()
}
