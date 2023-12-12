const importElementPromise = import('../element/index.js')

exports.elementToBeClickable = function (selectorOrElement: any): () => Promise<boolean> {
    return async function (this: WebdriverIO.Element) {
        const fn = (await importElementPromise).elementToBeClickable
        return fn(selectorOrElement).call(this)
    }
}

exports.elementToBeEnabled = function (selectorOrElement: any): () => Promise<boolean> {
    return async function (this: WebdriverIO.Element) {
        const fn = (await importElementPromise).elementToBeEnabled
        return fn(selectorOrElement).call(this)
    }
}

exports.elementToBeSelected = function (selectorOrElement: any): () => Promise<boolean> {
    return async function (this: WebdriverIO.Element) {
        const fn = (await importElementPromise).elementToBeSelected
        return fn(selectorOrElement).call(this)
    }
}

exports.invisibilityOf = function (selectorOrElement: any): () => Promise<boolean> {
    return async function (this: WebdriverIO.Element) {
        const fn = (await importElementPromise).invisibilityOf
        return fn(selectorOrElement).call(this)
    }
}

exports.numberOfElementsToBe = function (
    selectorOrElementArray: any,
    expectedNumber: number
): () => Promise<boolean> {
    return async function (this: WebdriverIO.Element) {
        const fn = (await importElementPromise).numberOfElementsToBe
        return fn(selectorOrElementArray, expectedNumber).call(this)
    }
}

exports.numberOfElementsToBeLessThan = function (
    selectorOrElementArray: any,
    expectedNumber: number
): () => Promise<boolean> {
    return async function (this: WebdriverIO.Element) {
        const fn = (await importElementPromise).numberOfElementsToBeLessThan
        return fn(selectorOrElementArray, expectedNumber).call(this)
    }
}

exports.numberOfElementsToBeMoreThan = function (
    selectorOrElementArray: any,
    expectedNumber: number,
): () => Promise<boolean> {
    return async function (this: WebdriverIO.Element) {
        const fn = (await importElementPromise).numberOfElementsToBeMoreThan
        return fn(selectorOrElementArray, expectedNumber).call(this)
    }
}

exports.presenceOf = function (selectorOrElement: any): () => Promise<boolean> {
    return async function (this: WebdriverIO.Element) {
        const fn = (await importElementPromise).presenceOf
        return fn(selectorOrElement).call(this)
    }
}

exports.sizeOfElementsToBe = function (
    selectorOrElement: any,
    expectedSize: { width: number; height: number },
): () => Promise<boolean> {
    return async function (this: WebdriverIO.Element) {
        const fn = (await importElementPromise).sizeOfElementsToBe
        return fn(selectorOrElement, expectedSize).call(this)
    }
}

exports.stalenessOf = function (selectorOrElement: any): () => Promise<boolean> {
    return async function (this: WebdriverIO.Element) {
        const fn = (await importElementPromise).stalenessOf
        return fn(selectorOrElement).call(this)
    }
}

exports.textToBePresentInElement = function (
    selectorOrElement: any,
    expectedText: string,
): () => Promise<boolean> {
    return async function (this: WebdriverIO.Element) {
        const fn = (await importElementPromise).textToBePresentInElement
        return fn(selectorOrElement, expectedText).call(this)
    }
}

exports.textToBePresentInElementValue = function (
    selectorOrElement: any,
    expectedValue: string,
): () => Promise<boolean> {
    return async function (this: WebdriverIO.Element) {
        const fn = (await importElementPromise).textToBePresentInElementValue
        return fn(selectorOrElement, expectedValue).call(this)
    }
}

exports.visibilityOf = function (selectorOrElement: any): () => Promise<boolean> {
    return async function (this: WebdriverIO.Element) {
        const fn = (await importElementPromise).visibilityOf
        return fn(selectorOrElement).call(this)
    }
}
