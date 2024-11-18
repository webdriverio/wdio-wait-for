import { numberOfElementsToBeLessThan } from '../../src/index.js'

const selector = '#elements button'

describe('numberOfElementsToBeLessThan', () => {
    beforeEach(async () => await browser.url('/add_remove_elements/'))

    it('should verify that method returns true when number of elements less than', async () => {
        const addElementButton = await $('button')
        await Promise.all([addElementButton.click(), addElementButton.click()])

        expect(await numberOfElementsToBeLessThan($$(selector), 3)()).toBe(true)
    })

    it('should verify that method returns false when number of elements not less than', async () => {
        const addElementButton = await $('button')
        await addElementButton.click()

        expect(await numberOfElementsToBeLessThan(selector, 1)()).toBe(false)
    })
})
