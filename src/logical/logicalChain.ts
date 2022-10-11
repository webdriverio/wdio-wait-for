export function logicalChain(defaultRet: boolean, fns: (() => Promise<boolean>)[]): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    if (fns.length === 0) {
      return defaultRet
    }
    const [fn] = fns
    return fn().then((bool: boolean): boolean => {
      if (bool === defaultRet) {
        // @ts-ignore
        return logicalChain(defaultRet, fns.slice(1))()
      } else {
        return !defaultRet
      }
    })
  }
}
