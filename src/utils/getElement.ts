import type { StringOrElement } from './../utils/element.types'

export const getElement = async (selectorOrElement: StringOrElement): Promise<WebdriverIO.Element> => {
    return typeof selectorOrElement === 'string'
        ? await $(selectorOrElement).getElement()
        : await selectorOrElement.getElement()
}
