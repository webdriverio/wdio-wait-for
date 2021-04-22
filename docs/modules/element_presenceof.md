[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/presenceOf

# Module: element/presenceOf

## Table of contents

### Functions

- [presenceOf](element_presenceof.md#presenceof)

## Functions

### presenceOf

▸ **presenceOf**(`selectorOrElement`: *string* \| *Promise*<WebdriverIO.Element\>): *function*

A condition for checking that an element is present on the DOM of a page

**`example`** 
browser.waitUntil(presenceOf('.header'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | *string* \| *Promise*<WebdriverIO.Element\> | The selector or element to check |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns a promise
    representing whether the element is present on the DOM.

Defined in: [element/presenceOf.ts:13](https://github.com/elaichenkov/wdio-wait-for/blob/074de0f/src/element/presenceOf.ts#L13)
