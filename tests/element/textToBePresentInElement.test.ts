import { textToBePresentInElement } from '../../src';

describe('textToBePresentInElement', () => {
  beforeEach(async () => await browser.url('/'));

  it('should verify that method returns true when element contains text', async () => {
    expect(await textToBePresentInElement('.heading', 'Welcome')()).toBe(true);
  });

  it('should verify that method returns false when element does not contain text', async () => {
    expect(await textToBePresentInElement('.heading', 'Home')()).toBe(false);
  });
});
