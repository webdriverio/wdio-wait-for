[wdio-wait-for](../README.md) / element/textToBePresentInElementValue

# Module: element/textToBePresentInElementValue

## Table of contents

### Functions

- [textToBePresentInElementValue](element_textToBePresentInElementValue.md#texttobepresentinelementvalue)

## Functions

### textToBePresentInElementValue

▸ **textToBePresentInElementValue**(`selectorOrElement`, `expectedValue`): () => `Promise`<`boolean`\>

A condition for checking an element contains a specific value

**`example`**
browser.waitUntil(textToBePresentInElementValue('input', 'password'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | [`StringOrElement`](utils_element_types.md#stringorelement) | The selector or element to check |
| `expectedValue` | `string` | The expected value to verify |

#### Returns

`fn`

A condition that returns a promise
    representing whether the element contains a specific value.

▸ (): `Promise`<`boolean`\>

A condition for checking an element contains a specific value

**`example`**
browser.waitUntil(textToBePresentInElementValue('input', 'password'));

##### Returns

`Promise`<`boolean`\>

A condition that returns a promise
    representing whether the element contains a specific value.

#### Defined in

[element/textToBePresentInElementValue.ts:17](https://github.com/webdriverio-community/wdio-wait-for/blob/60821ec/src/element/textToBePresentInElementValue.ts#L17)
