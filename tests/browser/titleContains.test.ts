import { titleContains } from '../../src/index.js'

describe('titleContains', () => {
  beforeEach(async () => await browser.url('/'))

  it('should verify that method returns true when title contains', async () => {
    expect(await titleContains('Internet').call(browser)).toBe(true)
  })

  it('should verify that method returns false when title does not contain', async () => {
    expect(await titleContains('Home').call(browser)).toBe(false)
  })
})
