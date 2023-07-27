// @ts-check
const { test, expect } = require('@playwright/test');
test.describe('primer test', () => {
test('primer test lenox', async ({page}) => {
 await page.goto('');
 await page.locator('#Usuario').fill('demo@sistemaslenox.com')
 await page.locator('').fill('Maynar*2986')
 await page.click('#btnIngresar')
})
})