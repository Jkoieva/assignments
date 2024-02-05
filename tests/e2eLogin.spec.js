import {test} from "@playwright/test";
import { LoginPage } from "../page-object/LoginPage";
import { HomePage } from "../page-object/HomePage";
import { BasePage } from "../page-object/BasePage";

test.describe("e2e Test for focus",()=>{

    test("Login invalid test", async ({page})=>{
        let loginPage = new LoginPage(page)
        await loginPage.visit('https://demo.focusfeedback.nl/FE_BSH_TEST/')
        await loginPage.doLoginInvalid()
    })

    test.beforeEach("Login valid test", async ({page})=>{
        let loginPage = new LoginPage(page)
        await loginPage.visit('https://demo.focusfeedback.nl/FE_BSH_TEST/')
        await loginPage.doLoginValid()
    })

    test("Check home page", async ({page})=>{
        let homePage = new HomePage(page)
        await homePage.loginToCompany()
    })
    
})