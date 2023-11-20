import type { ChainablePromiseElement, ChainablePromiseArray } from 'webdriverio'

export type StringOrElement = string | ChainablePromiseElement<WebdriverIO.Element>

export type StringOrElements = string | ChainablePromiseArray<WebdriverIO.ElementArray>
