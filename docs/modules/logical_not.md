[wdio-wait-for](../README.md) / [Modules](../modules.md) / logical/not

# Module: logical/not

## Table of contents

### Functions

- [not](logical_not.md#not)

## Functions

### not

▸ **not**(`expectedCondition`: () => *Promise*<boolean\>): *function*

Negates the result of a promise

**`example`** 
browser.waitUntil(not(alertIsPresent()));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedCondition` | () => *Promise*<boolean\> | The function to check |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns that returns the negated value.

Defined in: [logical/not.ts:12](https://github.com/webdriverio/wdio-wait-for/blob/074de0f/src/logical/not.ts#L12)
