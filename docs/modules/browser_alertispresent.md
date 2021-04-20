[wdio-wait-for](../README.md) / [Modules](../modules.md) / browser/alertIsPresent

# Module: browser/alertIsPresent

## Table of contents

### Functions

- [alertIsPresent](browser_alertispresent.md#alertispresent)

## Functions

### alertIsPresent

▸ **alertIsPresent**(): *function*

A condition for checking an alert on the page

**`example`** 
browser.waitUntil(alertIsPresent());

**Returns:** () => *Promise*<boolean\>

A condition that returns a promise
    representing whether an alert is present.

Defined in: [browser/alertIsPresent.ts:11](https://github.com/elaichenkov/wdio-wait-for/blob/d3bdd9f/src/browser/alertIsPresent.ts#L11)
