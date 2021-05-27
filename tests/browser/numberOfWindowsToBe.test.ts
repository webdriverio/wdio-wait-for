import { numberOfWindowsToBe } from '../../src';

describe('numberOfWindowsToBe', () => {
  beforeEach(async () => await browser.url('/'));

  it('should verify that method returns true when number of windows to be', async () => {
    const link = await $('.large-centered a');
    await link.click();

    expect(await numberOfWindowsToBe(2).call(browser)).toBe(true);
  });

  it('should verify that method returns false when number of windows not to be', async () => {
    await browser.closeWindow();

    expect(await numberOfWindowsToBe(2).call(browser)).toBe(false);
  });
});
