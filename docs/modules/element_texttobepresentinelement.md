[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/textToBePresentInElement

# Module: element/textToBePresentInElement

## Table of contents

### Functions

- [textToBePresentInElement](element_texttobepresentinelement.md#texttobepresentinelement)

## Functions

### textToBePresentInElement

▸ **textToBePresentInElement**(`selectorOrElement`: *string* \| *Promise*<WebdriverIO.Element\>, `expectedText`: *string*): *function*

A condition for checking an element contains a specific text

**`example`** 
browser.waitUntil(textToBePresentInElement('.home', 'Home'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | *string* \| *Promise*<WebdriverIO.Element\> | The selector or element to check |
| `expectedText` | *string* | The expected text to verify |

**Returns:** () => *Promise*<boolean\>

A condition that returns a promise
    representing whether the element contains a specific text.

Defined in: [element/textToBePresentInElement.ts:14](https://github.com/webdriverio/wdio-wait-for/blob/074de0f/src/element/textToBePresentInElement.ts#L14)
