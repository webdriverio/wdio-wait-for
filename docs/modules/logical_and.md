[wdio-wait-for](../README.md) / [Modules](../modules.md) / logical/and

# Module: logical/and

## Table of contents

### Functions

- [and](logical_and.md#and)

## Functions

### and

▸ **and**(...`args`: () => *Promise*<boolean\>[]): *function*

Chain a number of expected conditions using logical and, short circuiting
at the first expected condition that evaluates to false.

**`example`** 
browser.waitUntil(and(alertIsPresent(), numberOfWindowsToBe(2))));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | () => *Promise*<boolean\>[] | Arguments |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns a promise which
    evaluates to the result of the logical and.

Defined in: logical/and.ts:16
