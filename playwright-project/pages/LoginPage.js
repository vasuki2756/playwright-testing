class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = '#username';
    this.password = '#password';
    this.loginBtn = 'button[type="submit"]';
    this.successMsg = '.flash.success';
    this.errorMsg = '.flash.error';
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }

  async getSuccessMessage() {
    return this.page.locator(this.successMsg);
  }

  async getErrorMessage() {
    return this.page.locator(this.errorMsg);
  }
}

module.exports = { LoginPage };