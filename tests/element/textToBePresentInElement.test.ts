import { textToBePresentInElement } from '../../src/index.js'

const selector = '.heading'

describe('textToBePresentInElement', () => {
    beforeEach(async () => await browser.url('/'))

    it('should verify that method returns true when element contains text', async () => {
        expect(await textToBePresentInElement($(selector), 'Welcome')()).toBe(true)
    })

    it('should verify that method returns false when element does not contain text', async () => {
        expect(await textToBePresentInElement(selector, 'Home')()).toBe(false)
    })
})
