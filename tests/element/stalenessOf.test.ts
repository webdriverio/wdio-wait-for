import { stalenessOf } from '../../src';

const selector = '#elements';

describe('stalenessOf', () => {
  beforeEach(async () => await browser.url('/add_remove_elements/'));

  it('should verify that method returns true when element is not present on the DOM', async () => {
    await browser.execute('document.querySelector("#elements").remove()');

    expect(await stalenessOf($(selector))()).toBe(true);
  });

  it('should verify that method returns false when element is present on the DOM', async () => {
    expect(await stalenessOf(selector)()).toBe(false);
  });
});
