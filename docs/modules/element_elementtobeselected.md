[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/elementToBeSelected

# Module: element/elementToBeSelected

## Table of contents

### Functions

- [elementToBeSelected](element_elementToBeSelected.md#elementtobeselected)

## Functions

### elementToBeSelected

▸ **elementToBeSelected**(`selectorOrElement`): () => `Promise`<`boolean`\>

A condition for checking an element is visible and selected

**`example`**
browser.waitUntil(elementToBeSelected('.btn'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | [`StringOrElement`](utils_element_types.md#stringorelement) | The selector or element to check |

#### Returns

`fn`

An expected condition that returns a promise
    representing whether the element is selected.

▸ (): `Promise`<`boolean`\>

A condition for checking an element is visible and selected

**`example`**
browser.waitUntil(elementToBeSelected('.btn'));

##### Returns

`Promise`<`boolean`\>

An expected condition that returns a promise
    representing whether the element is selected.

#### Defined in

[element/elementToBeSelected.ts:16](https://github.com/webdriverio-community/wdio-wait-for/blob/5d4c2b2/src/element/elementToBeSelected.ts#L16)
