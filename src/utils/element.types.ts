import type { ChainablePromiseElement, ChainablePromiseArray, ElementArray } from 'webdriverio'

export type StringOrElement = string | ChainablePromiseElement<WebdriverIO.Element>

export type StringOrElements = string | ChainablePromiseArray<ElementArray>
