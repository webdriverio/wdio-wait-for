export const getElements = async (
  selectorOrElementArray: string | Promise<WebdriverIO.ElementArray>,
): Promise<WebdriverIO.ElementArray> => {
  return typeof selectorOrElementArray === 'string'
  //@ts-ignore
    ? await this.$$(selectorOrElementArray)
    : await selectorOrElementArray;
};
