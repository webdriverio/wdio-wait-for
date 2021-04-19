[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/numberOfElementsToBeMoreThan%u200B

# Module: element/numberOfElementsToBeMoreThan​

## Table of contents

### Functions

- [numberOfElementsToBeMoreThan](element_numberofelementstobemorethan_.md#numberofelementstobemorethan)

## Functions

### numberOfElementsToBeMoreThan

▸ **numberOfElementsToBeMoreThan**(`selector`: *string*, `expectedNumber`: *number*): *function*

A condition for checking number of elements with given selector being more than defined number

**`example`** 
browser.waitUntil(numberOfElementsToBeMoreThan​('a', 4));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | *string* | The selector to check |
| `expectedNumber` | *number* | The selector to check |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns a promise
    representing whether the element length is greater than defined number.

Defined in: element/numberOfElementsToBeMoreThan​.ts:14
