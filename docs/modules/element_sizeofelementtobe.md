[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/sizeOfElementToBe

# Module: element/sizeOfElementToBe

## Table of contents

### Functions

- [sizeOfElementsToBe](element_sizeofelementtobe.md#sizeofelementstobe)

## Functions

### sizeOfElementsToBe

▸ **sizeOfElementsToBe**(`selectorOrElement`: *string* \| *Promise*<WebdriverIO.Element\>, `expectedSize`: { `height`: *number* ; `width`: *number*  }): *function*

A condition for checking size of element with given selector

**`example`** 
browser.waitUntil(sizeOfElementsToBe('button', { width: 200, height: 200 }));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | *string* \| *Promise*<WebdriverIO.Element\> | The selector or element to check |
| `expectedSize` | *object* | The selector to check |
| `expectedSize.height` | *number* | - |
| `expectedSize.width` | *number* | - |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns a promise
    representing whether the element size.

Defined in: [element/sizeOfElementToBe.ts:14](https://github.com/webdriverio/wdio-wait-for/blob/074de0f/src/element/sizeOfElementToBe.ts#L14)
