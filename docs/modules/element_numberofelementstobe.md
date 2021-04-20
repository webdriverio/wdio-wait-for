[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/numberOfElementsToBe

# Module: element/numberOfElementsToBe

## Table of contents

### Functions

- [numberOfElementsToBe](element_numberofelementstobe.md#numberofelementstobe)

## Functions

### numberOfElementsToBe

▸ **numberOfElementsToBe**(`selector`: *string*, `expectedNumber`: *number*): *function*

A condition for checking number of elements with given selector

**`example`** 
browser.waitUntil(numberOfElementsToBe('a', 4));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | *string* | The selector to check |
| `expectedNumber` | *number* | The selector to check |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns a promise
    representing whether the element length.

Defined in: [element/numberOfElementsToBe.ts:14](https://github.com/elaichenkov/wdio-wait-for/blob/8456462/src/element/numberOfElementsToBe.ts#L14)
