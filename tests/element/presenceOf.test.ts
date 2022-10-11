import { presenceOf } from '../../src/index.js'

const selector = '#elements'

describe('presenceOf', () => {
  beforeEach(async () => await browser.url('/add_remove_elements/'))

  it('should verify that method returns true when element is present on the DOM', async () => {
    expect(await presenceOf($(selector))()).toBe(true)
  })

  it('should verify that method returns false when element is not present on the DOM', async () => {
    await browser.execute('document.querySelector("#elements").remove()')

    expect(await presenceOf(selector)()).toBe(false)
  })
})
