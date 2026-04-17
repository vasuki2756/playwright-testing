const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../test-data/loginData.json');

loginData.forEach((data, index) => {

  test(`login test ${index + 1}`, async ({ page }) => {

    const loginPage = new LoginPage(page);

    console.log(`Running test with: ${data.username} / ${data.password}`);

    await loginPage.goto();
    await loginPage.login(data.username, data.password);

    const message = await loginPage.getFlashMessage(); // ✅ FIX HERE

    await expect(message).toBeVisible();
    await expect(message).toContainText(data.expectedMessage);

  });

});