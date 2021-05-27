import { numberOfElementsToBeLessThan } from '../../src';

const selector = '#elements button';

describe('numberOfElementsToBeLessThan', () => {
  beforeEach(async () => await browser.url('/add_remove_elements/'));

  it('should verify that method returns true when number of elements less than', async () => {
    const addElementButton = await $('button');
    await Promise.all([addElementButton.click(), addElementButton.click()]);

    expect(await numberOfElementsToBeLessThan($$(selector), 3).call(browser)).toBe(true);
  });

  it('should verify that method returns false when number of elements not less than', async () => {
    const addElementButton = await $('button');
    await addElementButton.click();

    expect(await numberOfElementsToBeLessThan(selector, 1).call(browser)).toBe(false);
  });
});
