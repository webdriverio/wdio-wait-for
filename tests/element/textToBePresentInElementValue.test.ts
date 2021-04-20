import { textToBePresentInElementValue } from '../../src';

const selector = '[type="number"]';

describe('textToBePresentInElementValue', () => {
  beforeEach(async () => await browser.url('/inputs'));

  it('should verify that method returns true when element contains value', async () => {
    const input = await $(selector);
    await input.setValue('100');

    expect(await textToBePresentInElementValue(selector, '10')()).toBe(true);
  });

  it('should verify that method returns false when element does not contain value', async () => {
    const input = await $(selector);
    await input.setValue('1');

    expect(await textToBePresentInElementValue(selector, '2')()).toBe(false);
  });
});
