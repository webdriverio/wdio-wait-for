import { urlContains } from '../../src';

describe('urlContains', () => {
  beforeEach(async () => await browser.url('/'));

  it('should verify that method returns true when url contains', async () => {
    expect(await urlContains('internet')()).toBe(true);
  });

  it('should verify that method returns false when url does not contain', async () => {
    expect(await urlContains('home')()).toBe(false);
  });
});
