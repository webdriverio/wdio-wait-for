[wdio-wait-for](../README.md) / [Modules](../modules.md) / browser/titleIs

# Module: browser/titleIs

## Table of contents

### Functions

- [titleIs](browser_titleis.md#titleis)

## Functions

### titleIs

▸ **titleIs**(`expectedTitle`: *string*): *function*

A condition for checking the title of a page

**`example`** 
browser.waitUntil(titleIs('Dashboard - Main page'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedTitle` | *string* | The expected title |

**Returns:** () => *Promise*<boolean\>

A condition that returns a promise
    representing whether browser's title is.

Defined in: browser/titleIs.ts:12
