export const getElement = async (
  selectorOrElement: string | Promise<WebdriverIO.Element>,
): Promise<WebdriverIO.Element> => {
  return typeof selectorOrElement === 'string' ? await $(selectorOrElement) : await selectorOrElement;
};
