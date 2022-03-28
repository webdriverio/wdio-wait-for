[wdio-wait-for](../README.md) / browser/urlContains

# Module: browser/urlContains

## Table of contents

### Functions

- [urlContains](browser_urlContains.md#urlcontains)

## Functions

### urlContains

▸ **urlContains**(`expectedUrl`): () => `Promise`<`boolean`\>

A condition for checking the URL of the current page to contain specific text.

**`example`**
browser.waitUntil(urlContains('/v1'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedUrl` | `string` | The expected url |

#### Returns

`fn`

A condition that returns a promise
    representing whether browser's url contains.

▸ (): `Promise`<`boolean`\>

A condition for checking the URL of the current page to contain specific text.

**`example`**
browser.waitUntil(urlContains('/v1'));

##### Returns

`Promise`<`boolean`\>

A condition that returns a promise
    representing whether browser's url contains.

#### Defined in

[browser/urlContains.ts:14](https://github.com/webdriverio-community/wdio-wait-for/blob/60821ec/src/browser/urlContains.ts#L14)
