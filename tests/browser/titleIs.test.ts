import { titleIs } from '../../src';

describe('titleIs', () => {
  beforeEach(async () => await browser.url('/'));

  it('should verify that method returns true when title is', async () => {
    expect(await titleIs('The Internet').call(browser)).toBe(true);
  });

  it('should verify that method returns false when title is not', async () => {
    expect(await titleIs('The - Internet').call(browser)).toBe(false);
  });
});
