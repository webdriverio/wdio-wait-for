import { elementToBeEnabled } from '../../src';

const selector = 'button';

describe('elementToBeEnabled', () => {
  beforeEach(async () => await browser.url('/add_remove_elements/'));

  it('should verify that method returns true when element is enabled', async () => {
    expect(await elementToBeEnabled($(selector))()).toBe(true);
  });

  it('should verify that method returns false when element is not enabled', async () => {
    await browser.execute('document.querySelector("button").setAttribute("disabled", "");');

    expect(await elementToBeEnabled(selector)()).toBe(false);
  });
});
