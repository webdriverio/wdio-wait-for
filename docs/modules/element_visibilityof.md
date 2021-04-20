[wdio-wait-for](../README.md) / [Modules](../modules.md) / element/visibilityOf

# Module: element/visibilityOf

## Table of contents

### Functions

- [visibilityOf](element_visibilityof.md#visibilityof)

## Functions

### visibilityOf

▸ **visibilityOf**(`selector`: *string*): *function*

A condition for checking the element to be visible

**`example`** 
browser.waitUntil(visibilityOf('.header'));

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | *string* | The selector to check |

**Returns:** () => *Promise*<boolean\>

An expected condition that returns a promise
    representing whether the element is visible.

Defined in: [element/visibilityOf.ts:13](https://github.com/elaichenkov/wdio-wait-for/blob/8456462/src/element/visibilityOf.ts#L13)
