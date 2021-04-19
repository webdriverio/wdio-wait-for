[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/elementToBeInvisible

# Module: element/elementToBeInvisible

## Table of contents

### Functions

- [elementToBeInvisible](element_elementtobeinvisible.md#elementtobeinvisible)

## Functions

### elementToBeInvisible

▸ **elementToBeInvisible**(`selector`: *string*): *function*

A condition for checking the element to be invisible

**`example`** 
browser.waitUntil(elementToBeInvisible('.header'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | *string* | The selector to check |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns a promise
    representing whether the element is invisible.

Defined in: element/elementToBeInvisible.ts:13
