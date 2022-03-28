[wdio-wait-for](../README.md) / element/elementToBeEnabled

# Module: element/elementToBeEnabled

## Table of contents

### Functions

- [elementToBeEnabled](element_elementToBeEnabled.md#elementtobeenabled)

## Functions

### elementToBeEnabled

▸ **elementToBeEnabled**(`selectorOrElement`): () => `Promise`<`boolean`\>

A condition for checking an element is visible and enabled such that you can click it

**`example`**
browser.waitUntil(elementToBeEnabled('.btn'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | [`StringOrElement`](utils_element_types.md#stringorelement) | The selector or element to check |

#### Returns

`fn`

An expected condition that returns a promise
    representing whether the element is enabled.

▸ (): `Promise`<`boolean`\>

A condition for checking an element is visible and enabled such that you can click it

**`example`**
browser.waitUntil(elementToBeEnabled('.btn'));

##### Returns

`Promise`<`boolean`\>

An expected condition that returns a promise
    representing whether the element is enabled.

#### Defined in

[element/elementToBeEnabled.ts:16](https://github.com/webdriverio-community/wdio-wait-for/blob/60821ec/src/element/elementToBeEnabled.ts#L16)
