[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/visibilityOf

# Module: element/visibilityOf

## Table of contents

### Functions

- [visibilityOf](element_visibilityOf.md#visibilityof)

## Functions

### visibilityOf

▸ **visibilityOf**(`selectorOrElement`): () => `Promise`<`boolean`\>

A condition for checking the element to be visible

**`example`**
browser.waitUntil(visibilityOf('.header'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | [`StringOrElement`](utils_element_types.md#stringorelement) | The selector or element to check |

#### Returns

`fn`

An expected condition that returns a promise
    representing whether the element is visible.

▸ (): `Promise`<`boolean`\>

A condition for checking the element to be visible

**`example`**
browser.waitUntil(visibilityOf('.header'));

##### Returns

`Promise`<`boolean`\>

An expected condition that returns a promise
    representing whether the element is visible.

#### Defined in

[element/visibilityOf.ts:16](https://github.com/webdriverio-community/wdio-wait-for/blob/5d4c2b2/src/element/visibilityOf.ts#L16)
