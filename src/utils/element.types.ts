import type { ChainablePromiseElement, ChainablePromiseArray, ElementArray, Element } from 'webdriverio'

export type StringOrElement = string | ChainablePromiseElement<Element<'async'>>

export type StringOrElements = string | ChainablePromiseArray<ElementArray>
