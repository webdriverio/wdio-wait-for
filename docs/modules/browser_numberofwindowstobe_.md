[wdio-wait-for](../README.md) / [Modules](../modules.md) / browser/numberOfWindowsToBe%u200B

# Module: browser/numberOfWindowsToBe​

## Table of contents

### Functions

- [numberOfWindowsToBe](browser_numberofwindowstobe_.md#numberofwindowstobe)

## Functions

### numberOfWindowsToBe

▸ **numberOfWindowsToBe**(`expectedNumber`: *number*): *function*

A condition for checking the number of opened windows.

**`example`** 
browser.waitUntil(numberOfWindowsToBe(2));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedNumber` | *number* | The expected url |

**Returns:** () => *Promise*<boolean\>

A condition that returns a promise
    representing whether browser's windows length.

Defined in: browser/numberOfWindowsToBe​.ts:12
