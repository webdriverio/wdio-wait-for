[wdio-wait-for](../README.md) / browser/titleIs

# Module: browser/titleIs

## Table of contents

### Functions

- [titleIs](browser_titleIs.md#titleis)

## Functions

### titleIs

▸ **titleIs**(`expectedTitle`): () => `Promise`<`boolean`\>

A condition for checking the title of a page

**`example`**
browser.waitUntil(titleIs('Dashboard - Main page'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedTitle` | `string` | The expected title |

#### Returns

`fn`

A condition that returns a promise
    representing whether browser's title is.

▸ (): `Promise`<`boolean`\>

A condition for checking the title of a page

**`example`**
browser.waitUntil(titleIs('Dashboard - Main page'));

##### Returns

`Promise`<`boolean`\>

A condition that returns a promise
    representing whether browser's title is.

#### Defined in

[browser/titleIs.ts:14](https://github.com/webdriverio-community/wdio-wait-for/blob/60821ec/src/browser/titleIs.ts#L14)
