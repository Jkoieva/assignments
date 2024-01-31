import {test, expect, chromium} from '@playwright/test';
import {LoginPage} from './LoginPage.spec.js'

let loginData = [
    {
        email:"olenaqa@.com",
        pass:"Qwerty90",
        result:"Please enter a valid email address",
        locator:'//mat-error[@id="mat-mdc-error-0"]'
    },

    {
        email:"olena.p.qa@gmail.com",
        pass:"",
        result:"Please enter your password",
        locator:'//mat-error[@id="mat-mdc-error-1"]'
    }
]

    loginData.forEach(({email,pass,result,locator}) => {
        test(`Login with invalid data ${email}`, async()=>{
            const browser = await chromium.launch({headless:false});
            const page = await browser.newPage();
            let loginPage = new LoginPage(page)
            await loginPage.doLogin(email,pass,result,locator)
            await page.close()
            await browser.close()
        })
    })