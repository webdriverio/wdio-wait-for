import { elementToBeClickable } from '../../src';

const selector = 'button';

describe('elementToBeClickable', () => {
  beforeEach(async () => await browser.url('/add_remove_elements/'));

  it('should verify that method returns true when element is clickable', async () => {
    expect(await elementToBeClickable(selector)()).toBe(true);
  });

  it('should verify that method returns false when element is not clickable', async () => {
    await browser.execute('document.querySelector("button").setAttribute("disabled", "");');

    expect(await elementToBeClickable($(selector))()).toBe(false);
  });
});
