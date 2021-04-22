[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/elementToBeSelected

# Module: element/elementToBeSelected

## Table of contents

### Functions

- [elementToBeSelected](element_elementtobeselected.md#elementtobeselected)

## Functions

### elementToBeSelected

▸ **elementToBeSelected**(`selectorOrElement`: *string* \| *Promise*<WebdriverIO.Element\>): *function*

A condition for checking an element is visible and selected

**`example`** 
browser.waitUntil(elementToBeSelected('.btn'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | *string* \| *Promise*<WebdriverIO.Element\> | The selector or element to check |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns a promise
    representing whether the element is selected.

Defined in: [element/elementToBeSelected.ts:13](https://github.com/elaichenkov/wdio-wait-for/blob/074de0f/src/element/elementToBeSelected.ts#L13)
