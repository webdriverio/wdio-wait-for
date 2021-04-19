[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/elementContainsValue

# Module: element/elementContainsValue

## Table of contents

### Functions

- [elementContainsValue](element_elementcontainsvalue.md#elementcontainsvalue)

## Functions

### elementContainsValue

▸ **elementContainsValue**(`selector`: *string*, `expectedValue`: *string*): *function*

A condition for checking an element contains a specific value

**`example`** 
browser.waitUntil(elementContainsValue('input', 'password'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | *string* | The selector to check |
| `expectedValue` | *string* | The expected value to verify |

**Returns:** () => *Promise*<boolean\>

A condition that returns a promise
    representing whether the element contains a specific value.

Defined in: element/elementContainsValue.ts:14
