import { numberOfElementsToBe } from '../../src';

const selector = '#elements button';

describe('numberOfElementsToBe', () => {
  beforeEach(async () => await browser.url('/add_remove_elements/'));

  it('should verify that method returns true when number of elements to be', async () => {
    const addElementButton = await $('button');
    await addElementButton.click();
    await addElementButton.click();

    expect(await numberOfElementsToBe(selector, 2).call(browser)).toBe(true);
  });

  it('should verify that method returns false when number of elements not to be', async () => {
    const addElementButton = await $('button');
    await addElementButton.click();

    expect(await numberOfElementsToBe($$(selector), 2).call(browser)).toBe(false);
  });
});
