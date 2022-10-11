import { visibilityOf } from '../../src/index.js'

const selector = '#elements button'

describe('visibilityOf', () => {
  beforeEach(async () => await browser.url('/add_remove_elements/'))

  it('should verify that method returns true when element is visible', async () => {
    const addElementButton = await $('button')
    await addElementButton.click()

    expect(await visibilityOf(selector)()).toBe(true)
  })

  it('should verify that method returns false when element is not visible', async () => {
    const addElementButton = await $('button')
    await addElementButton.click()

    const deleteButton = await $(selector)
    await deleteButton.click()

    expect(await visibilityOf($(selector))()).toBe(false)
  })
})
