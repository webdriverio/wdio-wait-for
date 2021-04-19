[wdio-wait-for](../README.md) / [Modules](../modules.md) / browser/urlIs

# Module: browser/urlIs

## Table of contents

### Functions

- [urlIs](browser_urlis.md#urlis)

## Functions

### urlIs

▸ **urlIs**(`expectedUrl`: *string*): *function*

A condition for checking URL of the current page to be a specific url.

**`example`** 
browser.waitUntil(urlIs('https://the-internet.herokuapp.com/'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedUrl` | *string* | The expected url |

**Returns:** () => *Promise*<boolean\>

A condition that returns a promise
    representing whether browser's url is.

Defined in: browser/urlIs.ts:12
