import { test, expect } from '@playwright/test';


test('basic test', async ({ page }) => {
    await test.step('Playwright homepage', async () => {
        await page.goto('https://playwright.dev/');
    });
    await test.step('Validate title', async () => {
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('Playwright1');
    });
});
