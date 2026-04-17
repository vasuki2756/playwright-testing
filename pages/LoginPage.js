class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = '#username';
    this.password = '#password';
    this.loginBtn = 'button[type="submit"]';
    this.flashMsg = '#flash'; // one locator for both success & error
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);

    // wait for response / UI update
    await this.page.waitForLoadState('networkidle');
  }

  async getFlashMessage() {
    return this.page.locator(this.flashMsg);
  }
}

module.exports = { LoginPage };