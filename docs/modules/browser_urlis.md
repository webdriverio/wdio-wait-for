[wdio-wait-for](../README.md) / browser/urlIs

# Module: browser/urlIs

## Table of contents

### Functions

- [urlIs](browser_urlIs.md#urlis)

## Functions

### urlIs

▸ **urlIs**(`expectedUrl`): () => `Promise`<`boolean`\>

A condition for checking URL of the current page to be a specific url.

**`example`**
browser.waitUntil(urlIs('https://the-internet.herokuapp.com/'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedUrl` | `string` | The expected url |

#### Returns

`fn`

A condition that returns a promise
    representing whether browser's url is.

▸ (): `Promise`<`boolean`\>

A condition for checking URL of the current page to be a specific url.

**`example`**
browser.waitUntil(urlIs('https://the-internet.herokuapp.com/'));

##### Returns

`Promise`<`boolean`\>

A condition that returns a promise
    representing whether browser's url is.

#### Defined in

[browser/urlIs.ts:14](https://github.com/webdriverio-community/wdio-wait-for/blob/60821ec/src/browser/urlIs.ts#L14)
