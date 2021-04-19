[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/elementContainsText

# Module: element/elementContainsText

## Table of contents

### Functions

- [elementContainsText](element_elementcontainstext.md#elementcontainstext)

## Functions

### elementContainsText

▸ **elementContainsText**(`selector`: *string*, `expectedText`: *string*): *function*

A condition for checking an element contains a specific text

**`example`** 
browser.waitUntil(elementContainsText('.home', 'Home'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | *string* | The selector to check |
| `expectedText` | *string* | The expected text to verify |

**Returns:** () => *Promise*<boolean\>

A condition that returns a promise
    representing whether the element contains a specific text.

Defined in: element/elementContainsText.ts:14
