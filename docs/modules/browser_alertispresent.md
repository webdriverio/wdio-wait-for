[wdio-wait-for](../README.md) / browser/alertIsPresent

# Module: browser/alertIsPresent

## Table of contents

### Functions

- [alertIsPresent](browser_alertIsPresent.md#alertispresent)

## Functions

### alertIsPresent

▸ **alertIsPresent**(): () => `Promise`<`boolean`\>

A condition for checking an alert on the page

**`example`**
browser.waitUntil(alertIsPresent());

#### Returns

`fn`

A condition that returns a promise
    representing whether an alert is present.

▸ (): `Promise`<`boolean`\>

A condition for checking an alert on the page

**`example`**
browser.waitUntil(alertIsPresent());

##### Returns

`Promise`<`boolean`\>

A condition that returns a promise
    representing whether an alert is present.

#### Defined in

[browser/alertIsPresent.ts:13](https://github.com/webdriverio-community/wdio-wait-for/blob/60821ec/src/browser/alertIsPresent.ts#L13)
