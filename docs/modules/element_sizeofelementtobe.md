[wdio-wait-for](../README.md) / element/sizeOfElementToBe

# Module: element/sizeOfElementToBe

## Table of contents

### Functions

- [sizeOfElementsToBe](element_sizeOfElementToBe.md#sizeofelementstobe)

## Functions

### sizeOfElementsToBe

▸ **sizeOfElementsToBe**(`selectorOrElement`, `expectedSize`): () => `Promise`<`boolean`\>

A condition for checking size of element with given selector

**`example`**
browser.waitUntil(sizeOfElementsToBe('button', { width: 200, height: 200 }));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | [`StringOrElement`](utils_element_types.md#stringorelement) | The selector or element to check |
| `expectedSize` | `Object` | The selector to check |
| `expectedSize.height` | `number` | - |
| `expectedSize.width` | `number` | - |

#### Returns

`fn`

An expected condition that returns a promise
    representing whether the element size.

▸ (): `Promise`<`boolean`\>

A condition for checking size of element with given selector

**`example`**
browser.waitUntil(sizeOfElementsToBe('button', { width: 200, height: 200 }));

##### Returns

`Promise`<`boolean`\>

An expected condition that returns a promise
    representing whether the element size.

#### Defined in

[element/sizeOfElementToBe.ts:17](https://github.com/webdriverio-community/wdio-wait-for/blob/60821ec/src/element/sizeOfElementToBe.ts#L17)
