const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../test-data/loginData.json');

loginData.forEach((data, index) => {

  test(`login test ${index + 1}`, async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(data.username, data.password);

    if (data.expected === 'success') {
      await expect(await loginPage.getSuccessMessage())
        .toContainText('You logged into a secure area!');
    } else {
      await expect(await loginPage.getErrorMessage())
        .toBeVisible();
    }

  });

});