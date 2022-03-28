[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/numberOfElementsToBeMoreThan​

# Module: element/numberOfElementsToBeMoreThan​

## Table of contents

### Functions

- [numberOfElementsToBeMoreThan](element_numberOfElementsToBeMoreThan_.md#numberofelementstobemorethan)

## Functions

### numberOfElementsToBeMoreThan

▸ **numberOfElementsToBeMoreThan**(`selectorOrElementArray`, `expectedNumber`): () => `Promise`<`boolean`\>

A condition for checking number of elements with given selector being more than defined number

**`example`**
browser.waitUntil(numberOfElementsToBeMoreThan​('a', 4));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElementArray` | [`StringOrElements`](utils_element_types.md#stringorelements) | The selector or elements array to check |
| `expectedNumber` | `number` | The selector to check |

#### Returns

`fn`

An expected condition that returns a promise
    representing whether the element length is greater than defined number.

▸ (): `Promise`<`boolean`\>

A condition for checking number of elements with given selector being more than defined number

**`example`**
browser.waitUntil(numberOfElementsToBeMoreThan​('a', 4));

##### Returns

`Promise`<`boolean`\>

An expected condition that returns a promise
    representing whether the element length is greater than defined number.

#### Defined in

element/numberOfElementsToBeMoreThan​.ts:17
