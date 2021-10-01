import { test, expect } from '@playwright/test';

test.describe('Saucedemo login', () => {
    /*test('Open homepage and verify title', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        expect(await page.title()).toBe('Swag Labs');
    });*/

    test('Negative login', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        expect(await page.title()).toBe('Swag Labs');
        // Click [data-test="username"]
        await page.click('[data-test="username"]');
        // Fill [data-test="username"]
        await page.fill('[data-test="username"]', 'incorrect_user');
        // Click [data-test="password"]
        await page.click('[data-test="password"]');
        // Fill [data-test="password"]
        await page.fill('[data-test="password"]', 'secret_sauce');
        // Click [data-test="login-button"]
        await page.click('[data-test="login-button"]');
        const errMsgLocator = page.locator('[data-test="error"]');
        await expect(errMsgLocator)
        .toHaveText(
            /.*Epic sadface: Username and password do not match.*/, 
            { useInnerText: true }
        );
    });
})
