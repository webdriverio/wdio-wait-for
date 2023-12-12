const importBrowserPromise = import('../browser/index.js')

exports.alertIsPresent = async function () {
    return async function (this: WebdriverIO.Browser): Promise<boolean> {
        const fn = (await importBrowserPromise).alertIsPresent
        return fn().apply(this)
    }
}
exports.numberOfWindowsToBe = async function (expectedNumber: number) {
    return async function (this: WebdriverIO.Browser): Promise<boolean> {
        const fn = (await importBrowserPromise).numberOfWindowsToBe
        return fn(expectedNumber).call(this)
    }
}
exports.titleContains = async function (expectedTitle: string) {
    return async function (this: WebdriverIO.Browser): Promise<boolean> {
        const fn = (await importBrowserPromise).titleContains
        return fn(expectedTitle).call(this)
    }
}
exports.titleIs = async function (expectedTitle: string) {
    return async function (this: WebdriverIO.Browser): Promise<boolean> {
        const fn = (await importBrowserPromise).titleIs
        return fn(expectedTitle).call(this)
    }
}
exports.urlContains = async function (expectedUrl: string) {
    return async function (this: WebdriverIO.Browser): Promise<boolean> {
        const fn = (await importBrowserPromise).urlContains
        return fn(expectedUrl).call(this)
    }
}
exports.urlIs = async function (expectedUrl: string) {
    return async function (this: WebdriverIO.Browser): Promise<boolean> {
        const fn = (await importBrowserPromise).urlIs
        return fn(expectedUrl).call(this)
    }
}
