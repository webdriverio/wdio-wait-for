import { elementContainsText } from '../../src';

describe('elementContainsText', () => {
  beforeEach(async () => await browser.url('/'));

  it('should verify that method returns true when element contains text', async () => {
    expect(await elementContainsText('.heading', 'Welcome')()).toBe(true);
  });

  it('should verify that method returns false when element does not contain text', async () => {
    expect(await elementContainsText('.heading', 'Home')()).toBe(false);
  });
});
