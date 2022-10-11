const importBrowserPromise = import('../browser/index.js')

exports.alertIsPresent = async function () {
    const fn = (await importBrowserPromise).alertIsPresent
    return fn.apply(this)
}
exports.numberOfWindowsToBe = async function (expectedNumber: number) {
    const fn = (await importBrowserPromise).numberOfWindowsToBe
    return fn.call(this, expectedNumber)
}
exports.titleContains = async function (expectedTitle: string) {
    const fn = (await importBrowserPromise).titleContains
    return fn.call(this, expectedTitle)
}
exports.titleIs = async function (expectedTitle: string) {
    const fn = (await importBrowserPromise).titleIs
    return fn.call(this, expectedTitle)
}
exports.urlContains = async function (expectedUrl: string) {
    const fn = (await importBrowserPromise).urlContains
    return fn.call(this, expectedUrl)
}
exports.urlIs = async function (expectedUrl: string) {
    const fn = (await importBrowserPromise).urlIs
    return fn.call(this, expectedUrl)
}
