import {test} from '..//fixtures/fixture';
import { HomePage } from '../page-object/HomePage';
import { LoginPage } from '../page-object/LoginPage';

test.describe("e2e",()=>{

    test ("Login to company", async({page,homePage})=>{
        await homePage.loginToCompany()
    })

})