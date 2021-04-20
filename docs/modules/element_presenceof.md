[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/presenceOf

# Module: element/presenceOf

## Table of contents

### Functions

- [presenceOf](element_presenceof.md#presenceof)

## Functions

### presenceOf

▸ **presenceOf**(`selector`: *string*): *function*

A condition for checking that an element is present on the DOM of a page

**`example`** 
browser.waitUntil(presenceOf('.header'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | *string* | The selector to check |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns a promise
    representing whether the element is present on the DOM.

Defined in: [element/presenceOf.ts:13](https://github.com/elaichenkov/wdio-wait-for/blob/8456462/src/element/presenceOf.ts#L13)
