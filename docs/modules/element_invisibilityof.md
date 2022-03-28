[wdio-wait-for](../README.md) / element/invisibilityOf

# Module: element/invisibilityOf

## Table of contents

### Functions

- [invisibilityOf](element_invisibilityOf.md#invisibilityof)

## Functions

### invisibilityOf

▸ **invisibilityOf**(`selectorOrElement`): () => `Promise`<`boolean`\>

A condition for checking the element to be invisible

**`example`**
browser.waitUntil(invisibilityOf('.header'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectorOrElement` | [`StringOrElement`](utils_element_types.md#stringorelement) | The selector or element to check |

#### Returns

`fn`

An expected condition that returns a promise
    representing whether the element is invisible.

▸ (): `Promise`<`boolean`\>

A condition for checking the element to be invisible

**`example`**
browser.waitUntil(invisibilityOf('.header'));

##### Returns

`Promise`<`boolean`\>

An expected condition that returns a promise
    representing whether the element is invisible.

#### Defined in

[element/invisibilityOf.ts:16](https://github.com/webdriverio-community/wdio-wait-for/blob/60821ec/src/element/invisibilityOf.ts#L16)
