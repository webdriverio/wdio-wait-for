[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/elementToBeVisible

# Module: element/elementToBeVisible

## Table of contents

### Functions

- [elementToBeVisible](element_elementtobevisible.md#elementtobevisible)

## Functions

### elementToBeVisible

▸ **elementToBeVisible**(`selector`: *string*): *function*

A condition for checking the element to be visible

**`example`** 
browser.waitUntil(elementToBeVisible('.header'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | *string* | The selector to check |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns a promise
    representing whether the element is visible.

Defined in: element/elementToBeVisible.ts:13
