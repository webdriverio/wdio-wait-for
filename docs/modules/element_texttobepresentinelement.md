[wdio-wait-for](../README.md) / element/textToBePresentInElement

# Module: element/textToBePresentInElement

## Table of contents

### Functions

- [textToBePresentInElement](element_textToBePresentInElement.md#texttobepresentinelement)

## Functions

### textToBePresentInElement

▸ **textToBePresentInElement**(`selectorOrElement`, `expectedText`): () => `Promise`<`boolean`\>

A condition for checking an element contains a specific text

**`example`**
browser.waitUntil(textToBePresentInElement('.home', 'Home'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | [`StringOrElement`](utils_element_types.md#stringorelement) | The selector or element to check |
| `expectedText` | `string` | The expected text to verify |

#### Returns

`fn`

A condition that returns a promise
    representing whether the element contains a specific text.

▸ (): `Promise`<`boolean`\>

A condition for checking an element contains a specific text

**`example`**
browser.waitUntil(textToBePresentInElement('.home', 'Home'));

##### Returns

`Promise`<`boolean`\>

A condition that returns a promise
    representing whether the element contains a specific text.

#### Defined in

[element/textToBePresentInElement.ts:17](https://github.com/webdriverio-community/wdio-wait-for/blob/60821ec/src/element/textToBePresentInElement.ts#L17)
