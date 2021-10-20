[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/visibilityOf

# Module: element/visibilityOf

## Table of contents

### Functions

- [visibilityOf](element_visibilityof.md#visibilityof)

## Functions

### visibilityOf

▸ **visibilityOf**(`selectorOrElement`: *string* \| *Promise*<WebdriverIO.Element\>): *function*

A condition for checking the element to be visible

**`example`** 
browser.waitUntil(visibilityOf('.header'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | *string* \| *Promise*<WebdriverIO.Element\> | The selector or element to check |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns a promise
    representing whether the element is visible.

Defined in: [element/visibilityOf.ts:13](https://github.com/webdriverio/wdio-wait-for/blob/074de0f/src/element/visibilityOf.ts#L13)
