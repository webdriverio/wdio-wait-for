const assert = require('node:assert')

console.log('Running CJS tests')

// eslint-disable-next-line import/extensions
const pkg = require('../../')
assert.equal(Object.keys(pkg).length, 22)
assert.equal(typeof pkg.alertIsPresent, 'function')
assert.equal(typeof pkg.invisibilityOf, 'function')
assert.equal(typeof pkg.and, 'function')

console.log('CJS tests passed!')
