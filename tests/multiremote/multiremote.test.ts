import {
  urlContains,
  alertIsPresent,
  numberOfWindowsToBe,
  titleIs,
  urlIs,
  titleContains,
  elementToBeClickable,
  elementToBeEnabled,
  elementToBeSelected,
  numberOfElementsToBeLessThan,
} from '../../src/index.js'

declare const browserA: WebdriverIO.Browser
declare const browserB: WebdriverIO.Browser

describe('Multiremote', () => {
  beforeEach(async () => await browser.url('/'))

  describe('Browser', () => {
    it('should verify urlContains method', async () => {
      await browserB.url('https://webdriver.io')

      expect(await urlContains('io').call(browserB)).toBe(true)
      expect(await urlContains('io').call(browserA)).toBe(false)
    })

    it('should verify urlIs method', async () => {
      await browserB.url('https://webdriver.io')

      expect(await urlIs('https://the-internet.herokuapp.com/').call(browserA)).toBe(true)
      expect(await urlIs('https://webdriver.io/').call(browserB)).toBe(true)
    })

    it('should verify alertIsPresent method', async () => {
      await browserB.execute('alert("Alert");')

      expect(await alertIsPresent().call(browserB)).toBe(true)
      expect(await alertIsPresent().call(browserA)).toBe(false)
    })

    it('should verify titleIs method', async () => {
      await browserA.url('https://webdriver.io')

      expect(await titleIs('The Internet').call(browserA)).toBe(false)
      expect(await titleIs('The Internet').call(browserB)).toBe(true)
    })

    it('should verify titleContains method', async () => {
      await browserA.url('https://webdriver.io')

      expect(await titleContains('Internet').call(browserB)).toBe(true)
      expect(await titleContains('WebdriverIO').call(browserA)).toBe(true)
    })

    it('should verify numberOfWindowsToBe method', async () => {
      const link = await browserA.$('.large-centered a')
      await link.click()

      expect(await numberOfWindowsToBe(2).call(browserA)).toBe(true)
      expect(await numberOfWindowsToBe(2).call(browserB)).toBe(false)
    })
  })

  describe('Element', () => {
    it('should verify elementToBeClickable method', async () => {
      await browser.url('/add_remove_elements/')

      await browserB.execute('document.querySelector("button").setAttribute("disabled", "");')

      expect(await elementToBeClickable(browserB.$('button'))()).toBe(false)
      expect(await elementToBeClickable(browserA.$('button'))()).toBe(true)
    })

    it('should verify elementToBeEnabled method', async () => {
      await browser.url('/add_remove_elements/')

      await browserB.execute('document.querySelector("button").setAttribute("disabled", "");')

      expect(await elementToBeEnabled(browserB.$('button'))()).toBe(false)
      expect(await elementToBeEnabled(browserA.$('button'))()).toBe(true)
    })

    it('should verify elementToBeSelected method', async () => {
      await browser.url('/checkboxes')

      const selector = '#checkboxes input'
      const checkbox = await browserA.$(selector)
      await checkbox.click()

      expect(await elementToBeSelected(browserA.$(selector))()).toBe(true)
      expect(await elementToBeSelected(browserB.$(selector))()).toBe(false)
    })

    it('should verify numberOfElementsToBeLessThan method', async () => {
      await browser.url('/add_remove_elements/')

      const selector = '#elements button'
      const addElementButton = await browserA.$('button')
      await Promise.all([addElementButton.click(), addElementButton.click()])

      expect(await numberOfElementsToBeLessThan(browserA.$$(selector), 3)()).toBe(true)
      expect(await numberOfElementsToBeLessThan(browserB.$$(selector), 1)()).toBe(true)
    })
  })
})
