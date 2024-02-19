import {test, chromium, expect} from "@playwright/test";
const readline = require ('readline');
const fs = require ('fs');
import * as assert from 'assert';

test.describe("File download",()=>{

    test("Download", async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/download")
        await page.pause()
        // await page.locator(`//a[@href="download/myData2.csv"]`).click()

        const downloadPromise = page.waitForEvent('download');
        await page.getByText('myData2.csv').click();
        const download = await downloadPromise;
        const path = `downloads/${download.suggestedFilename()}`

        await download.saveAs(path);
        await page.pause()

        const stream = fs.createReadStream(path);
        const reader = readline.createInterface({
            input: stream,
            crlfDelay: Infinity
        });

        const expectedData = ["Data"]
        reader.on('line',(line)=>{
            const columns = line.split(',');
            console.log(columns)
            assert.deepStrictEqual(columns,expectedData)
        });

        reader.on('close',()=>{
            try {
                fs.unlinkSync(path);
                console.log('File deleted');
            } catch (err){
                console.error(err.message);
            }
        })
         
        
    });
})
