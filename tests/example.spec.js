import {test, expect, chromium} from '@playwright/test';

test('Google test', async () => {
  const browser = await chromium.launch(({ headless: false}));
  const page = await browser.newPage();
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Odrzuć wszystko' }).click();
  await page.getByLabel('Szukaj', { exact: true }).click();
  await page.getByLabel('Szukaj', { exact: true }).fill('Ukraine');
  await page.getByLabel('Szukaj w Google').first().click();
  await page.getByRole('link', { name: 'Ukraine Wikipedia https://en.' }).click();
  await page.getByRole('link', { name: 'Armed Forces of Ukraine', exact: true }).click();
  await page.getByRole('heading', { name: 'Armed Forces of Ukraine' }).locator('span').click();

  await browser.close();
  
});

test('Google test1', async () => {
  const browser = await chromium.launch(({ headless: false}));
  const page = await browser.newPage();
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Odrzuć wszystko' }).click();
  await page.getByLabel('Szukaj', { exact: true }).click();
  await page.getByLabel('Szukaj', { exact: true }).fill('sun');
  await page.getByLabel('Szukaj w Google').first().click();
  await expect(page).toHaveTitle(/sun/);

  await browser.close();


})

test('Airbnb test', async () => {
  const browser = await chromium.launch(({ headless: false}))
  const page = await browser.newPage();
  await page.goto('https://www.airbnb.com.ua/');
  // await page.pause();
  await page.getByRole('button', { name: 'Закрити' }).click();
  await page.getByTestId('structured-search-input-field-query').click();
  await page.getByTestId('structured-search-input-field-query').fill('Canada');
  await page.getByTestId('structured-search-input-field-split-dates-0').click();
  await page.getByLabel('1, Thursday, February').click();
  await page.getByLabel('8, Thursday, February').click();
  await page.getByTestId('structured-search-input-field-guests-button').click();
  await page.getByTestId('stepper-adults-increase-button').click();
  await page.getByTestId('stepper-adults-increase-button').click();
  await page.getByTestId('structured-search-input-search-button').click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.rfexzly').first().click();
  const page1 = await page1Promise;
  await page1.getByLabel('Закрити').click();
  await page1.getByRole('heading', { name: 'Калґарі, Канада: Помешкання для оренди цілком' }).click();

  await browser.close();
})

test('Airbnb test1', async () => {
  const browser = await chromium.launch(({ headless: false}))
  const page = await browser.newPage();
  await page.goto('https://www.airbnb.com.ua/');
  await page.getByRole('button', { name: 'Почати пошук' }).click();
  await page.getByLabel('Вибрати мову та валюту').click();
  await expect(page.getByRole('button', { name: 'Українська Україна' })).toBeVisible();

  await browser.close();

})

test('Playwright test', async () => {
  const browser = await chromium.launch(({ headless: false}))
  const page = await browser.newPage();
  await page.goto('https://playwright.dev/');
  // await page.pause();
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.waitForSelector('a:has-text("Writing tests")', { visible: true });
  await browser.close();
})

test('Playwright test1', async () => {
  const browser = await chromium.launch(({ headless: false}))
  const page = await browser.newPage();
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await expect (page.getByLabel('Docs sidebar').getByRole('link', { name: 'API reference' })).toBeVisible();
  await browser.close();
})