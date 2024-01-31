const { expect } = require ('playwright/test');


module.exports = class LoginPage {

   constructor(page) {
    this.page = page;
    this.emailField = page.locator('//input[@id="mat-input-0"]')
    this.passwordField = page.locator('//input[@id="mat-input-1"]')
    this.submitBtn = page.locator('//button')
    this.emailValidMess = page.locator('//mat-error[@id="mat-mdc-error-0"]')
    this.passValMess = page.locator('//mat-error[@id="mat-mdc-error-1"]')
   }

   async doLogin(){
    await this.page.goto('https://demo.focusfeedback.nl/FE_BSH_TEST/authentication/signin')
    await this.emailField.fill(email)
    await this.passwordField.pressSequentially(pass)
    expect(this.page.locator(locator).toHaveText(result))
   }


}