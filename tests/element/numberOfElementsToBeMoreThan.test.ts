import { numberOfElementsToBeMoreThan } from '../../src/index.js'

const selector = '#elements button'

describe('numberOfElementsToBeMoreThan', () => {
  beforeEach(async () => await browser.url('/add_remove_elements/'))

  it('should verify that method returns true when number of elements more than', async () => {
    const addElementButton = await $('button')
    await Promise.all([addElementButton.click(), addElementButton.click(), addElementButton.click()])

    expect(await numberOfElementsToBeMoreThan(selector, 2)()).toBe(true)
  })

  it('should verify that method returns false when number of elements not more than', async () => {
    const addElementButton = await $('button')
    await addElementButton.click()

    expect(await numberOfElementsToBeMoreThan($$(selector), 1)()).toBe(false)
  })
})
