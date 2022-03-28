[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/numberOfElementsToBeLessThan

# Module: element/numberOfElementsToBeLessThan

## Table of contents

### Functions

- [numberOfElementsToBeLessThan](element_numberOfElementsToBeLessThan.md#numberofelementstobelessthan)

## Functions

### numberOfElementsToBeLessThan

▸ **numberOfElementsToBeLessThan**(`selectorOrElementArray`, `expectedNumber`): () => `Promise`<`boolean`\>

A condition for checking number of elements with given selector being less than defined number

**`example`**
browser.waitUntil(numberOfElementsToBeLessThan('a', 2));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElementArray` | [`StringOrElements`](utils_element_types.md#stringorelements) | The selector or elements array to check |
| `expectedNumber` | `number` | The selector to check |

#### Returns

`fn`

An expected condition that returns a promise
    representing whether the element length is less than defined number.

▸ (): `Promise`<`boolean`\>

A condition for checking number of elements with given selector being less than defined number

**`example`**
browser.waitUntil(numberOfElementsToBeLessThan('a', 2));

##### Returns

`Promise`<`boolean`\>

An expected condition that returns a promise
    representing whether the element length is less than defined number.

#### Defined in

[element/numberOfElementsToBeLessThan.ts:17](https://github.com/webdriverio-community/wdio-wait-for/blob/5d4c2b2/src/element/numberOfElementsToBeLessThan.ts#L17)
