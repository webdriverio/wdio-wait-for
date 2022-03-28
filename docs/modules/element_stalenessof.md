[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/stalenessOf

# Module: element/stalenessOf

## Table of contents

### Functions

- [stalenessOf](element_stalenessOf.md#stalenessof)

## Functions

### stalenessOf

▸ **stalenessOf**(`selectorOrElement`): () => `Promise`<`boolean`\>

A condition for checking that an element is not present on the DOM of a page

**`example`**
browser.waitUntil(stalenessOf('.header'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | [`StringOrElement`](utils_element_types.md#stringorelement) | The selector or element to check |

#### Returns

`fn`

An expected condition that returns a promise
    representing whether the element is not present on the DOM.

▸ (): `Promise`<`boolean`\>

A condition for checking that an element is not present on the DOM of a page

**`example`**
browser.waitUntil(stalenessOf('.header'));

##### Returns

`Promise`<`boolean`\>

An expected condition that returns a promise
    representing whether the element is not present on the DOM.

#### Defined in

[element/stalenessOf.ts:16](https://github.com/webdriverio-community/wdio-wait-for/blob/5d4c2b2/src/element/stalenessOf.ts#L16)
