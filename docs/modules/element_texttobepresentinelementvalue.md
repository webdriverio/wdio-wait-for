[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/textToBePresentInElementValue

# Module: element/textToBePresentInElementValue

## Table of contents

### Functions

- [textToBePresentInElementValue](element_texttobepresentinelementvalue.md#texttobepresentinelementvalue)

## Functions

### textToBePresentInElementValue

▸ **textToBePresentInElementValue**(`selectorOrElement`: *string* \| *Promise*<WebdriverIO.Element\>, `expectedValue`: *string*): *function*

A condition for checking an element contains a specific value

**`example`** 
browser.waitUntil(textToBePresentInElementValue('input', 'password'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | *string* \| *Promise*<WebdriverIO.Element\> | The selector or element to check |
| `expectedValue` | *string* | The expected value to verify |

**Returns:** () => *Promise*<boolean\>

A condition that returns a promise
    representing whether the element contains a specific value.

Defined in: [element/textToBePresentInElementValue.ts:14](https://github.com/webdriverio/wdio-wait-for/blob/074de0f/src/element/textToBePresentInElementValue.ts#L14)
