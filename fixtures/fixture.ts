import { BrowserContext, Page, test as baseTest } from "@playwright/test";
import { LoginPage } from "../page-object/LoginPage";
import { HomePage } from "../page-object/HomePage";
import { chromium } from "@playwright/test";

type basePage = {
    loginPage: LoginPage,
    homePage: HomePage,
    browserContext: BrowserContext,
    page: Page,
    number7:number
  }

export const test = baseTest.extend<basePage>({
    browserContext:async({},use) => {
        let browser = await chromium.launch({headless:false})
        let context = await browser.newContext()
        await use(context);
    },
    page : async ({browserContext},use) => {
        let page = await browserContext.newPage()
        await use(page);
    },

    homePage : async ({page},use) =>{
        let loginPage = new LoginPage(page)
        await loginPage.visit("https://demo.focusfeedback.nl/FE_BSH_TEST/")
        await loginPage.doLoginValid()
        let homePage = new HomePage(page)
        await use(homePage)

    },

    loginPage:async({page},use) => {
        let loginPage = new LoginPage(page)
        await use(loginPage)
    }

})