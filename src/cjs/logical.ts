const importLogicalPromise = import('../logical/index.js')

exports.and = function (...args: (() => Promise<boolean>)[]): () => Promise<boolean> {
    return async () => {
        const fn = (await importLogicalPromise).and
        return fn.call(this, ...args)()
    }
}

exports.not = function (expectedCondition: () => Promise<boolean>): () => Promise<boolean> {
    return async () => {
        const fn = (await importLogicalPromise).not
        return fn.call(this, expectedCondition)()
    }
}

exports.or = function (...args: (() => Promise<boolean>)[]): () => Promise<boolean> {
    return async () => {
        const fn = (await importLogicalPromise).or
        return fn.call(this, ...args)()
    }
}
