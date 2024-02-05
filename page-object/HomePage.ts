import {Page, expect} from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    bshnlCompany: any
    homeBreadcrumb: any
    constructor(page){
        super(page)
        this.bshnlCompany = page.locator(`//div[@class='companies-list']/div/a[contains(text(),'BSHNL')]`)
        this.homeBreadcrumb = page.locator(`//span[@class="ng-star-inserted"]`)
    }

    async loginToCompany(){
        await this.bshnlCompany.click()
        await expect(this.homeBreadcrumb).toContainText("Home")
    }
}