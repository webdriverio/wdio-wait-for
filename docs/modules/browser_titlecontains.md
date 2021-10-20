[wdio-wait-for](../README.md) / [Modules](../modules.md) / browser/titleContains

# Module: browser/titleContains

## Table of contents

### Functions

- [titleContains](browser_titlecontains.md#titlecontains)

## Functions

### titleContains

▸ **titleContains**(`expectedTitle`: *string*): *function*

A condition for checking that the title contains a case-sensitive substring

**`example`** 
browser.waitUntil(titleContains('Dashboard'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedTitle` | *string* | The expected title |

**Returns:** () => *Promise*<boolean\>

A condition that returns a promise
    representing whether browser's title contains.

Defined in: [browser/titleContains.ts:12](https://github.com/webdriverio/wdio-wait-for/blob/074de0f/src/browser/titleContains.ts#L12)
