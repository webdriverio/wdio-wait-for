import { urlIs } from '../../src/index.js'

describe('urlIs', () => {
  beforeEach(async () => await browser.url('/'))

  it('should verify that method returns true when url is', async () => {
    expect(await urlIs('https://the-internet.herokuapp.com/').call(browser)).toBe(true)
  })

  it('should verify that method returns false when url is not', async () => {
    expect(await urlIs('http://the-internet.herokuapp.com/').call(browser)).toBe(false)
  })
})
