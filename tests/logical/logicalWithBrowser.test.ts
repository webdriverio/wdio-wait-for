import * as EC from '../../src/index.js'

const usernameSelector = '#username'
const passwordSelector = '#password'
const submitButton = 'button[type="submit"]'
const subHeader = '.subheader'
const logoutButton = 'a.button[href="/logout"]'
const welcomeText = 'Welcome to the Secure Area.'

describe('browser and logical not', () => {
    it('should open login page', async () => {
        await browser.url('/login')
        await expect(await EC.urlContains('login').call(browser)).toBe(true)
    })

    it('should enter credentials', async () => {
        const username = await $(usernameSelector)
        const password = await $(passwordSelector)

        await username.setValue('tomsmith')
        await password.setValue('SuperSecretPassword!')

        await expect(await username.getValue()).toEqual('tomsmith')
        await expect(await password.getValue()).toEqual('SuperSecretPassword!')
    })

    it('should wait until the user get redirected from login page', async () => {
        await $(submitButton).click()
        await browser.waitUntil(() => EC.not(EC.urlContains('login')).call(browser))
        await expect(await EC.urlContains('login').call(browser)).toBe(false)
    })

    it('should verify user has logged in', async () => {
        await expect(await $(subHeader)).toBeExisting()
        const subHeaderText = await $(subHeader).getText()
        await expect(subHeaderText).toContain(welcomeText)
    })

    it('should wait until the user get redirected to login page', async () => {
        await $(logoutButton).click()
        await browser.waitUntil(() => EC.urlContains('login').call(browser))
        await expect(await EC.urlContains('login').call(browser)).toBe(true)
    })
})
