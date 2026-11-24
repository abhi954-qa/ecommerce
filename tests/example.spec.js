// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Swag Labs');
});

test('has page logo as "Swag Labs', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Click the get started link.
  //await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator('div div div.login_logo')).toHaveText('Swag Labs');
});

test('successful login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('input[id="user-name"]').fill('standard_user');
  await page.locator('input[id="password"]').fill('secret_sauce');
  await page.locator('input[type="submit"]').click();
  await expect(page.locator('div span[class="title"]')).toHaveText('Products');
});
