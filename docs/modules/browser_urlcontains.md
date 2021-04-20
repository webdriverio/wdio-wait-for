[wdio-wait-for](../README.md) / [Modules](../modules.md) / browser/urlContains

# Module: browser/urlContains

## Table of contents

### Functions

- [urlContains](browser_urlcontains.md#urlcontains)

## Functions

### urlContains

▸ **urlContains**(`expectedUrl`: *string*): *function*

A condition for checking the URL of the current page to contain specific text.

**`example`** 
browser.waitUntil(urlContains('/v1'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedUrl` | *string* | The expected url |

**Returns:** () => *Promise*<boolean\>

A condition that returns a promise
    representing whether browser's url contains.

Defined in: [browser/urlContains.ts:12](https://github.com/elaichenkov/wdio-wait-for/blob/d3bdd9f/src/browser/urlContains.ts#L12)
