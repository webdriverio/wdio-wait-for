const importElementPromise = import('../element/index.js')

exports.elementToBeClickable = function (selectorOrElement: any): () => Promise<boolean> {
    return async () => {
        const fn = (await importElementPromise).elementToBeClickable
        return fn.call(this, selectorOrElement)()
    }
}

exports.elementToBeEnabled = function (selectorOrElement: any): () => Promise<boolean> {
    return async () => {
        const fn = (await importElementPromise).elementToBeEnabled
        return fn.call(this, selectorOrElement)()
    }
}

exports.elementToBeSelected = function (selectorOrElement: any): () => Promise<boolean> {
    return async () => {
        const fn = (await importElementPromise).elementToBeSelected
        return fn.call(this, selectorOrElement)()
    }
}

exports.invisibilityOf = function (selectorOrElement: any): () => Promise<boolean> {
    return async () => {
        const fn = (await importElementPromise).invisibilityOf
        return fn.call(this, selectorOrElement)()
    }
}

exports.numberOfElementsToBe = function (
    selectorOrElementArray: any,
    expectedNumber: number
): () => Promise<boolean> {
    return async () => {
        const fn = (await importElementPromise).numberOfElementsToBe
        return fn.call(this, selectorOrElementArray, expectedNumber)()
    }
}

exports.numberOfElementsToBeLessThan = function (
    selectorOrElementArray: any,
    expectedNumber: number
): () => Promise<boolean> {
    return async () => {
        const fn = (await importElementPromise).numberOfElementsToBeLessThan
        return fn.call(this, selectorOrElementArray, expectedNumber)()
    }
}

exports.numberOfElementsToBeMoreThan = function (
    selectorOrElementArray: any,
    expectedNumber: number,
): () => Promise<boolean> {
    return async () => {
        const fn = (await importElementPromise).numberOfElementsToBeMoreThan
        return fn.call(this, selectorOrElementArray, expectedNumber)()
    }
}

exports.presenceOf = function (selectorOrElement: any): () => Promise<boolean> {
    return async () => {
        const fn = (await importElementPromise).presenceOf
        return fn.call(this, selectorOrElement)()
    }
}

exports.sizeOfElementsToBe = function (
    selectorOrElement: any,
    expectedSize: { width: number; height: number },
): () => Promise<boolean> {
    return async () => {
        const fn = (await importElementPromise).sizeOfElementsToBe
        return fn.call(this, selectorOrElement, expectedSize)()
    }
}

exports.stalenessOf = function (selectorOrElement: any): () => Promise<boolean> {
    return async () => {
        const fn = (await importElementPromise).stalenessOf
        return fn.call(this, selectorOrElement)()
    }
}

exports.textToBePresentInElement = function (
    selectorOrElement: any,
    expectedText: string,
): () => Promise<boolean> {
    return async () => {
        const fn = (await importElementPromise).textToBePresentInElement
        return fn.call(this, selectorOrElement, expectedText)()
    }
}

exports.textToBePresentInElementValue = function (
    selectorOrElement: any,
    expectedValue: string,
): () => Promise<boolean> {
    return async () => {
        const fn = (await importElementPromise).textToBePresentInElementValue
        return fn.call(this, selectorOrElement, expectedValue)()
    }
}

exports.visibilityOf = function (selectorOrElement: any): () => Promise<boolean> {
    return async () => {
        const fn = (await importElementPromise).visibilityOf
        return fn.call(this, selectorOrElement)()
    }
}
