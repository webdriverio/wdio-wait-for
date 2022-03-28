[wdio-wait-for](../README.md) / [Modules](../modules.md) / logical/or

# Module: logical/or

## Table of contents

### Functions

- [or](logical_or.md#or)

## Functions

### or

▸ **or**(...`args`): () => `Promise`<`boolean`\>

Chain a number of expected conditions using logical or, short circuiting
at the first expected condition that evaluates to true.

**`example`**
browser.waitUntil(or(numberOfWindowsToBe(3), numberOfWindowsToBe(2))));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | () => `Promise`<`boolean`\>[] | Arguments |

#### Returns

`fn`

An expected condition that returns a promise which
    evaluates to the result of the logical or.

▸ (): `Promise`<`boolean`\>

Chain a number of expected conditions using logical or, short circuiting
at the first expected condition that evaluates to true.

**`example`**
browser.waitUntil(or(numberOfWindowsToBe(3), numberOfWindowsToBe(2))));

##### Returns

`Promise`<`boolean`\>

An expected condition that returns a promise which
    evaluates to the result of the logical or.

#### Defined in

[logical/or.ts:16](https://github.com/webdriverio-community/wdio-wait-for/blob/5d4c2b2/src/logical/or.ts#L16)
