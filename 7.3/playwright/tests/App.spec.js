const { chromium } = require("playwright");
const user = require("../../playwright/data/user");
const { test, expect } = require("../../playwright/tests");

(async () => {
	const browser = await chromium.launch({
		headless: false,
		slowMo: 5000,
		// devtools: true
		// node NetologyTest.js
	});
	const page = await browser.newPage();
  
  await page.goto("https://netology.ru/?modal=sign_in");
   await page.fill('[placeholder="Email"]', user.email);
   await page.fill('[placeholder="Пароль"]', user.password);
   await page.click('text=Войти');
   const content = page.locator("h2.components-pages-Profile-Programs-programs-module__title--NCjbp") 
   await expect(content).toHaveText("Мои курсы и профессии")

   await browser.close();
  })();
  
  (async () => {
    const browser = await chromium.launch({ 
      headless: false,
      slowMo: 5000,
      // devtools: true
      // node NetologyTest.js
    });
    const page = await browser.newPage();
  
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', "d@mail.ru");
  await page.fill('[placeholder="Пароль"]', "ffff");
  await page.click('text=Войти');
  const content = page.locator("div.components-ui-Form-Hint-hint-module__hint--A2dPV.inputHint")
  await expect(content).toHaveText("Вы ввели неправильно логин или пароль")
})
