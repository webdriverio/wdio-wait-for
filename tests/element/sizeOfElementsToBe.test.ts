import { sizeOfElementsToBe } from '../../src/index.js'

const selector = 'button'
let defaultWidth = 147
let defaultHeight = 46

describe('sizeOfElementsToBe', () => {
  beforeEach(async () => await browser.url('/add_remove_elements/'))

  it('should verify that method returns true when size of element to be', async () => {
    defaultWidth = (await (await $('button')).getSize()).width

    await browser.execute('document.querySelector("button").style.height = "300px"')

    expect(await sizeOfElementsToBe(selector, { width: defaultWidth, height: 300 })()).toBe(true)
  })

  it('should verify that method returns true when size of element to be', async () => {
    defaultHeight = (await (await $('button')).getSize()).height

    await browser.execute('document.querySelector("button").style.width = "200px"')
    expect(await sizeOfElementsToBe($(selector), { width: 200, height: defaultHeight })()).toBe(true)
  })

  it('should verify that method returns false when size of element not to be', async () => {
    expect(await sizeOfElementsToBe(selector, { width: 200, height: defaultHeight })()).toBe(false)
  })

  it('should verify that method returns false when size of element not to be', async () => {
    expect(await sizeOfElementsToBe(selector, { width: defaultWidth, height: 100 })()).toBe(false)
  })
})
