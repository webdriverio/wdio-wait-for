[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/elementToBeEnabled

# Module: element/elementToBeEnabled

## Table of contents

### Functions

- [elementToBeEnabled](element_elementtobeenabled.md#elementtobeenabled)

## Functions

### elementToBeEnabled

▸ **elementToBeEnabled**(`selectorOrElement`: *string* \| *Promise*<WebdriverIO.Element\>): *function*

A condition for checking an element is visible and enabled such that you can click it

**`example`** 
browser.waitUntil(elementToBeEnabled('.btn'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | *string* \| *Promise*<WebdriverIO.Element\> | The selector or element to check |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns a promise
    representing whether the element is enabled.

Defined in: [element/elementToBeEnabled.ts:13](https://github.com/webdriverio/wdio-wait-for/blob/074de0f/src/element/elementToBeEnabled.ts#L13)
