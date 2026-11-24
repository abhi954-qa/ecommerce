// @ts-check
import { test, expect } from '@playwright/test';

test('user can fill form and submit', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  await page.locator('input[id="firstName"]').fill("Kannur");
  await page.locator('input[id="lastName"]').fill("Rahul");
  await page.locator('input[id="userEmail"]').fill('klrahul@gmail.com');
  await page.locator('input[id="gender-radio-1"]').click();
  await expect(page.locator('input[id="gender-radio-1"]')).toBeChecked();
  await page.locator('input[id="userNumber"]').fill('9345612341');
  await page.waitForTimeout(3000);
  await page.locator('input[id="subjectsInput"]').fill('Phy');
  await page.getByText('Physics', { exact: true }).click();
  await page.locator('input[id="hobbies-checkbox-1"]').click();
  await page.locator('input[id="hobbies-checkbox-3"]').click();
  await page.locator('textarea[id="currentAddress"]').fill("Bengaluru");
  await page.locator('input[id="hobbies-checkbox-1"]').click();
  await page.locator('button[id="submit"]').click();



});




