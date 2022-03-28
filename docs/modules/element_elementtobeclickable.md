[wdio-wait-for](../README.md) / element/elementToBeClickable

# Module: element/elementToBeClickable

## Table of contents

### Functions

- [elementToBeClickable](element_elementToBeClickable.md#elementtobeclickable)

## Functions

### elementToBeClickable

▸ **elementToBeClickable**(`selectorOrElement`): () => `Promise`<`boolean`\>

A condition for checking an element is visible and clickable

**`example`**
browser.waitUntil(elementToBeClickable('.links'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | [`StringOrElement`](utils_element_types.md#stringorelement) | The selector or element to check |

#### Returns

`fn`

An expected condition that returns a promise
    representing whether the element is clickable.

▸ (): `Promise`<`boolean`\>

A condition for checking an element is visible and clickable

**`example`**
browser.waitUntil(elementToBeClickable('.links'));

##### Returns

`Promise`<`boolean`\>

An expected condition that returns a promise
    representing whether the element is clickable.

#### Defined in

[element/elementToBeClickable.ts:16](https://github.com/webdriverio-community/wdio-wait-for/blob/60821ec/src/element/elementToBeClickable.ts#L16)
