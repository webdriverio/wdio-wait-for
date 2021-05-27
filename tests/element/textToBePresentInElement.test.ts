import { textToBePresentInElement } from '../../src';

const selector = '.heading';

describe('textToBePresentInElement', () => {
  beforeEach(async () => await browser.url('/'));

  it('should verify that method returns true when element contains text', async () => {
    expect(await textToBePresentInElement($(selector), 'Welcome').call(browser)).toBe(true);
  });

  it('should verify that method returns false when element does not contain text', async () => {
    expect(await textToBePresentInElement(selector, 'Home').call(browser)).toBe(false);
  });
});
