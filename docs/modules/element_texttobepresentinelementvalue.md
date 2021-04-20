[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/textToBePresentInElementValue

# Module: element/textToBePresentInElementValue

## Table of contents

### Functions

- [textToBePresentInElementValue](element_texttobepresentinelementvalue.md#texttobepresentinelementvalue)

## Functions

### textToBePresentInElementValue

▸ **textToBePresentInElementValue**(`selector`: *string*, `expectedValue`: *string*): *function*

A condition for checking an element contains a specific value

**`example`** 
browser.waitUntil(textToBePresentInElementValue('input', 'password'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | *string* | The selector to check |
| `expectedValue` | *string* | The expected value to verify |

**Returns:** () => *Promise*<boolean\>

A condition that returns a promise
    representing whether the element contains a specific value.

Defined in: [element/textToBePresentInElementValue.ts:14](https://github.com/elaichenkov/wdio-wait-for/blob/8456462/src/element/textToBePresentInElementValue.ts#L14)
