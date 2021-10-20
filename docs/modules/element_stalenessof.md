[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/stalenessOf

# Module: element/stalenessOf

## Table of contents

### Functions

- [stalenessOf](element_stalenessof.md#stalenessof)

## Functions

### stalenessOf

▸ **stalenessOf**(`selectorOrElement`: *string* \| *Promise*<WebdriverIO.Element\>): *function*

A condition for checking that an element is not present on the DOM of a page

**`example`** 
browser.waitUntil(stalenessOf('.header'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | *string* \| *Promise*<WebdriverIO.Element\> | The selector or element to check |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns a promise
    representing whether the element is not present on the DOM.

Defined in: [element/stalenessOf.ts:13](https://github.com/webdriverio/wdio-wait-for/blob/074de0f/src/element/stalenessOf.ts#L13)
