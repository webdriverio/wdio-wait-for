[wdio-wait-for](../README.md) / browser/titleContains

# Module: browser/titleContains

## Table of contents

### Functions

- [titleContains](browser_titleContains.md#titlecontains)

## Functions

### titleContains

▸ **titleContains**(`expectedTitle`): () => `Promise`<`boolean`\>

A condition for checking that the title contains a case-sensitive substring

**`example`**
browser.waitUntil(titleContains('Dashboard'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedTitle` | `string` | The expected title |

#### Returns

`fn`

A condition that returns a promise
    representing whether browser's title contains.

▸ (): `Promise`<`boolean`\>

A condition for checking that the title contains a case-sensitive substring

**`example`**
browser.waitUntil(titleContains('Dashboard'));

##### Returns

`Promise`<`boolean`\>

A condition that returns a promise
    representing whether browser's title contains.

#### Defined in

[browser/titleContains.ts:14](https://github.com/webdriverio-community/wdio-wait-for/blob/60821ec/src/browser/titleContains.ts#L14)
