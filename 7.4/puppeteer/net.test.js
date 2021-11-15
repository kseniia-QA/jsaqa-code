let page;

beforeEach(async () => {
	page = await browser.newPage();
	
	await page.goto('https://netology.ru');
}, 30000);

afterEach(() => {
	page.close();
});

describe('Netology.ru tests', () => {
	test("The first test'", async () => {
		const title = await page.title();
		console.log('Page title: ' + title);
		const firstLink = await page.$('header a + a');
		// const firstLinkText = await page.$eval(
		//   "header a + a",
		//   (link) => link.textContent
		// );
		await firstLink.click();
		await page.waitForNavigation();
		const title2 = await page.title();
		console.log('Page title: ' + title2);
		const pageList = await browser.newPage();
		await pageList.goto('https://netology.ru/navigation');
		await pageList.waitForSelector('h1');
	}, 19000);

	test("The first link text 'Медиа Нетологии'", async () => {
		const actual = await page.$eval('header a + a', (link) => link.textContent);
		expect(actual).toContain('Медиа Нетологии');
		await page
			.waitForTimeout(1000)
			.then(() => console.log('Waited a second! Second time'));
	});

	test("The first link leads on 'Медиа' page", async () => {
		await page.click('header a + a');
		await page.waitForSelector('.logo__media', {
			visible: true,
		});
		const actual = await page.$eval('.logo__media', (link) => link.textContent);
		expect(actual).toContain('Медиа');
		await page
			.waitForTimeout(1000)
			.then(() => console.log('Waited a second! Third time'));
	});
});

    
 test("Checks page with vacancies'", async () => { 
  page = await browser.newPage();
      await page.goto("https://netology.ru/job");
      await page.waitForTimeout(3000);
      const actual = await page.$eval("h1.shared-containers-Jobs-components-Presentation-presentation-module__title--gkLaB", (link) => link.textContent);
    expect(actual).toContain("Работа ");
  }, 15000);

test("Checks page with experts", async () => { 
  page = await browser.newPage();
      await page.goto("https://netology.ru/experts");
      await page.waitForTimeout(3000);
      const actual = await page.$eval("h1.tn-atom", (link) => link.textContent);
    expect(actual).toContain("Станьте экспертом");  
  }, 15000);

 
test("Checks page with partners", async () => { 
  page = await browser.newPage();
      await page.goto("https://netology.ru/partners");
      await page.waitForTimeout(3000);
      const actual = await page.$eval("h1.shared-containers-Partners-components-Header-header-module__title--1vdjP", (link) => link.textContent);
    expect(actual).toContain("Станьте партнером Нетологии"); 
  }, 15000);



