import { titleContains } from '../../src';

describe('titleContains', () => {
  beforeEach(async () => await browser.url('/'));

  it('should verify that method returns true when title contains', async () => {
    expect(await titleContains('Internet')()).toBe(true);
  });

  it('should verify that method returns false when title does not contain', async () => {
    expect(await titleContains('Home')()).toBe(false);
  });
});
