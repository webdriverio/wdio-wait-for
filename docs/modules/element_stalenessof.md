[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/stalenessOf

# Module: element/stalenessOf

## Table of contents

### Functions

- [stalenessOf](element_stalenessof.md#stalenessof)

## Functions

### stalenessOf

▸ **stalenessOf**(`selector`: *string*): *function*

A condition for checking that an element is not present on the DOM of a page

**`example`** 
browser.waitUntil(stalenessOf('.header'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | *string* | The selector to check |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns a promise
    representing whether the element is not present on the DOM.

Defined in: element/stalenessOf.ts:13
