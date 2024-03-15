import { expect } from 'playwright/test';
import { BasePage } from './BasePage';


export class LoginPage extends BasePage {

   page: any
   emailField: any
   passwordField: any
   submitBtn: any
   emailValidMess: any
   passValMess: any
   succesLogin: any

   constructor(page) {
      super(page)
   this.page = page
    this.emailField = page.locator('//input[@id="mat-input-0"]')
    this.passwordField = page.locator('//input[@id="mat-input-1"]')
    this.submitBtn = page.locator('//button')
    this.emailValidMess = page.locator('//mat-error[@id="mat-mdc-error-0"]')
    this.passValMess = page.locator('//mat-error[@id="mat-mdc-error-1"]')
    this.succesLogin = page.locator('//h1[@class="text-center choose-company"]')
   }

   async doLoginInvalid(){
    await this.emailField.fill('olenap.gmail.com')
    await this.passwordField.click()
    await this.passwordField.pressSequentially('Qwerty90')
    await this.emailField.click()
    await expect (this.emailValidMess).toHaveText('Please enter a valid email address')
   }

   async doLoginValid(){
   await this.emailField.fill('olena.p.qa@gmail.com')
   await this.passwordField.click()
   await this.passwordField.pressSequentially('Asdfgh90_')
   await this.submitBtn.click()
   await expect(this.succesLogin).toHaveText('Choose company')
   }

}
