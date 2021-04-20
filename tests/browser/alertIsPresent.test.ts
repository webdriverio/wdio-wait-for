import { alertIsPresent } from '../../src';

describe('alertIsPresent', () => {
  beforeEach(async () => await browser.url('/'));

  it('should verify that method returns true when element is clickable', async () => {
    await browser.execute('alert("Alert");');

    expect(await alertIsPresent()()).toBe(true);
  });

  it('should verify that method returns false when alert is not present', async () => {
    expect(await alertIsPresent()()).toBe(false);
  });
});
