export const getElements = async (
  selectorOrElementArray: string | Promise<WebdriverIO.ElementArray>,
): Promise<WebdriverIO.ElementArray> => {
  return typeof selectorOrElementArray === 'string' ? await $$(selectorOrElementArray) : await selectorOrElementArray;
};
