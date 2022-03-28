[wdio-wait-for](../README.md) / browser/numberOfWindowsToBe​

# Module: browser/numberOfWindowsToBe​

## Table of contents

### Functions

- [numberOfWindowsToBe](browser_numberOfWindowsToBe_.md#numberofwindowstobe)

## Functions

### numberOfWindowsToBe

▸ **numberOfWindowsToBe**(`expectedNumber`): () => `Promise`<`boolean`\>

A condition for checking the number of opened windows.

**`example`**
browser.waitUntil(numberOfWindowsToBe(2));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedNumber` | `number` | The expected url |

#### Returns

`fn`

A condition that returns a promise
    representing whether browser's windows length.

▸ (): `Promise`<`boolean`\>

A condition for checking the number of opened windows.

**`example`**
browser.waitUntil(numberOfWindowsToBe(2));

##### Returns

`Promise`<`boolean`\>

A condition that returns a promise
    representing whether browser's windows length.

#### Defined in

browser/numberOfWindowsToBe​.ts:14
