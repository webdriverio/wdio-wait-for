[wdio-wait-for](../README.md) / element/presenceOf

# Module: element/presenceOf

## Table of contents

### Functions

- [presenceOf](element_presenceOf.md#presenceof)

## Functions

### presenceOf

▸ **presenceOf**(`selectorOrElement`): () => `Promise`<`boolean`\>

A condition for checking that an element is present on the DOM of a page

**`example`**
browser.waitUntil(presenceOf('.header'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | [`StringOrElement`](utils_element_types.md#stringorelement) | The selector or element to check |

#### Returns

`fn`

An expected condition that returns a promise
    representing whether the element is present on the DOM.

▸ (): `Promise`<`boolean`\>

A condition for checking that an element is present on the DOM of a page

**`example`**
browser.waitUntil(presenceOf('.header'));

##### Returns

`Promise`<`boolean`\>

An expected condition that returns a promise
    representing whether the element is present on the DOM.

#### Defined in

[element/presenceOf.ts:16](https://github.com/webdriverio-community/wdio-wait-for/blob/60821ec/src/element/presenceOf.ts#L16)
