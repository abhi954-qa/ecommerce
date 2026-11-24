// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('input[id="user-name"]').fill('standard_user');
  await page.locator('input[id="password"]').fill('secret_sauce');
  await page.locator('input[type="submit"]').click();
  await expect(page.locator('div span[class="title"]')).toHaveText('Products');


});

test('add to cart functionality for Sauce Labs backpack', async ({ page }) => {
    await page.locator('button[name="add-to-cart-sauce-labs-backpack"]').click();
    //1 product added to cart. Can check if the count is 1
    await expect(page.locator('span[class="shopping_cart_badge"]')).toHaveCount(1);

});

test('that the Sauce labs backpack is added and present in the cart', async ({ page }) => {
    await page.locator('button[id="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('a[class="shopping_cart_link"]').click();
    //1 product added to cart. Can check if the count is 1
    //const product = page.locator('.cart-item').filter({ hasText: 'Sauce Labs Backpack' });
    //await expect(product).toBeVisible();
    await expect(page.locator('div[class="inventory_item_name"]')).toHaveText('Sauce Labs Backpack');

});

test('the functionality of Remove button', async ({ page }) => {
    await page.locator('button[id="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('a[class="shopping_cart_link"]').click();
    console.log("Removing product from cart");
    await page.locator('button[id="remove-sauce-labs-backpack"]').click();
    await expect(page.locator('span[class="shopping_cart_badge"]')).toHaveCount(0);

});


