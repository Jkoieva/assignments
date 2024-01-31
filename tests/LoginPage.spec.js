import { expect } from 'playwright/test';


export class LoginPage {

   constructor(page) {
    this.page = page;
    this.emailField = page.locator('//input[@id="mat-input-0"]')
    this.passwordField = page.locator('//input[@id="mat-input-1"]')
    this.submitBtn = page.locator('//button')
    this.emailValidMess = page.locator('//mat-error[@id="mat-mdc-error-0"]')
    this.passValMess = page.locator('//mat-error[@id="mat-mdc-error-1"]')
   }

   async doLogin(email,pass,result,locator){
    await this.page.goto('https://demo.focusfeedback.nl/FE_BSH_TEST/authentication/signin')
    await this.emailField.fill(email)
    await this.passwordField.click()
    await this.passwordField.pressSequentially(pass)
    await this.emailField.click()
    expect(this.page.locator(locator)).toHaveText(result)
   }

}
