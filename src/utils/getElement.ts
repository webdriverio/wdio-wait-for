export const getElement = async (
  selectorOrElement: string | Promise<WebdriverIO.Element>,
): Promise<WebdriverIO.Element> => {
  //@ts-ignore
  return typeof selectorOrElement === 'string' ? await this.$(selectorOrElement) : await selectorOrElement;
};
