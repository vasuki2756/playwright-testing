import { test, expect } from '@playwright/test';

test('google test fixed', async ({ page }) => {
  await page.goto('https://www.google.com');

  await page.locator('textarea[name="q"]').fill('Playwright');
  await page.keyboard.press('Enter');

  await page.waitForLoadState('networkidle');

  await expect(page).toHaveURL(/search/);
});