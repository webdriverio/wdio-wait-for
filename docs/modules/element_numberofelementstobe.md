[wdio-wait-for](../README.md) / element/numberOfElementsToBe

# Module: element/numberOfElementsToBe

## Table of contents

### Functions

- [numberOfElementsToBe](element_numberOfElementsToBe.md#numberofelementstobe)

## Functions

### numberOfElementsToBe

▸ **numberOfElementsToBe**(`selectorOrElementArray`, `expectedNumber`): () => `Promise`<`boolean`\>

A condition for checking number of elements with given selector

**`example`**
browser.waitUntil(numberOfElementsToBe('a', 4));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElementArray` | [`StringOrElements`](utils_element_types.md#stringorelements) | The selector or elements array to check |
| `expectedNumber` | `number` | The selector to check |

#### Returns

`fn`

An expected condition that returns a promise
    representing whether the element length.

▸ (): `Promise`<`boolean`\>

A condition for checking number of elements with given selector

**`example`**
browser.waitUntil(numberOfElementsToBe('a', 4));

##### Returns

`Promise`<`boolean`\>

An expected condition that returns a promise
    representing whether the element length.

#### Defined in

[element/numberOfElementsToBe.ts:17](https://github.com/webdriverio-community/wdio-wait-for/blob/60821ec/src/element/numberOfElementsToBe.ts#L17)
