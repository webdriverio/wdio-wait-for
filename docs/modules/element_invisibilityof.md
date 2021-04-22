[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/invisibilityOf

# Module: element/invisibilityOf

## Table of contents

### Functions

- [invisibilityOf](element_invisibilityof.md#invisibilityof)

## Functions

### invisibilityOf

▸ **invisibilityOf**(`selectorOrElement`: *string* \| *Promise*<WebdriverIO.Element\>): *function*

A condition for checking the element to be invisible

**`example`** 
browser.waitUntil(invisibilityOf('.header'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | *string* \| *Promise*<WebdriverIO.Element\> | The selector or element to check |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns a promise
    representing whether the element is invisible.

Defined in: [element/invisibilityOf.ts:13](https://github.com/elaichenkov/wdio-wait-for/blob/074de0f/src/element/invisibilityOf.ts#L13)
