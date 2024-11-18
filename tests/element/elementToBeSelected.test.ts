import { elementToBeSelected } from '../../src/index.js'

const selector = '#checkboxes input'

describe('elementToBeSelected', () => {
    beforeEach(async () => await browser.url('/checkboxes'))

    it('should verify that method returns true when element is selected', async () => {
        const checkbox = await $(selector)
        await checkbox.click()

        expect(await elementToBeSelected(selector)()).toBe(true)
    })

    it('should verify that method returns false when element is not selected', async () => {
        expect(await elementToBeSelected($(selector))()).toBe(false)
    })
})
