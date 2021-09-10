# WDIO-WAIT-FOR [![Test](https://github.com/elaichenkov/wdio-wait-for/actions/workflows/main.yml/badge.svg)](https://github.com/elaichenkov/wdio-wait-for/actions/workflows/main.yml) [![Total npm downloads](https://img.shields.io/npm/dt/wdio-wait-for.svg)](https://www.npmjs.com/package/wdio-wait-for)

> wdio-wait-for is a Node.js library for [WebdriverIO](http://webdriver.io/) that supplies a set of common conditions that provides functionalities to wait for certain conditions till a defined task is complete.

## Installation
To use wdio-wait-for in your project, run:

```shell
npm i -D wdio-wait-for
```
## [API](./docs/modules.md)

- [alertIsPresent](docs/modules/browser_alertispresent.md)
- [numberOfWindowsToBe​](docs/modules/browser_numberofwindowstobe_.md)
- [titleContains](docs/modules/browser_titlecontains.md)
- [titleIs](docs/modules/browser_titleis.md)
- [urlContains](docs/modules/browser_urlcontains.md)
- [urlIs](docs/modules/browser_urlis.md)
- [elementToBeClickable](docs/modules/element_elementtobeclickable.md)
- [elementToBeEnabled](docs/modules/element_elementtobeenabled.md)
- [elementToBeSelected](docs/modules/element_elementtobeselected.md)
- [invisibilityOf](docs/modules/element_invisibilityof.md)
- [numberOfElementsToBe](docs/modules/element_numberofelementstobe.md)
- [numberOfElementsToBeLessThan](docs/modules/element_numberofelementstobelessthan.md)
- [numberOfElementsToBeMoreThan​](docs/modules/element_numberofelementstobemorethan_.md)
- [presenceOf](docs/modules/element_presenceof.md)
- [sizeOfElementToBe](docs/modules/element_sizeofelementtobe.md)
- [stalenessOf](docs/modules/element_stalenessof.md)
- [textToBePresentInElement](docs/modules/element_texttobepresentinelement.md)
- [textToBePresentInElementValue](docs/modules/element_texttobepresentinelementvalue.md)
- [visibilityOf](docs/modules/element_visibilityof.md)
- [and](docs/modules/logical_and.md)
- [not](docs/modules/logical_not.md)
- [or](docs/modules/logical_or.md)

## Examples

### Import
#### JavaScript

```javascript
// import all methods
const EC = require('wdio-wait-for');

browser.waitUntil(EC.alertIsPresent(), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the alert to be present' })
```

```javascript
// import specific method
const { alertIsPresent } = require('wdio-wait-for');

browser.waitUntil(alertIsPresent(), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the alert to be present' })
```

#### TypeScript

```typescript
// import all methods
import * as EC from 'wdio-wait-for';

browser.waitUntil(EC.elementToBeEnabled('input'), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the element to be enabled' })
```

```typescript
// import specific method
import { elementToBeEnabled } from 'wdio-wait-for';

browser.waitUntil(elementToBeEnabled('input'), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the element to be enabled' })
```
### Wait for alert
This code code snippet shows how to use conditions

```typescript
browser.waitUntil(alertIsPresent(), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the alert to be present' })
```
### Wait for number of elements to be
This code code snippet shows how to use conditions

```typescript
browser.waitUntil(numberOfElementsToBe('.links', 2), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the 2 elements' })
```

## License

wdio-wait-for is [MIT licensed](./LICENSE).


## Author
Yevhen Laichenkov <elaichenkov@gmail.com>
