# WDIO-WAIT-FOR

> wdio-wait-for is a Node.js library for [WebdriverIO](http://webdriver.io/) that supplies a set of common conditions that provides functionalities to wait for certain conditions till a defined task is complete.
## [API](./docs/modules.md)

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

#### Typescript

```typescript
// import all methods
import * as EC from 'wdio-wait-for';

browser.waitUntil(EC.elementToBeEnabled('input'), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the element to be enabled' })
```

```typescript
// import specific method
import { elementToBeEnabled } from 'wdio-wait-for';

browser.waitUntil(elementToBeEnabled('input'), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the alert to be present' })
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