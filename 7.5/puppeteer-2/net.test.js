const { clickElement, putText, getText } = require("./lib/commands.js");


let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Netology.ru tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  test("Checks one ticket is bought'", async () => {
    const title = await page.title();
 
    await clickElement(page, '.page-nav > a:nth-child(3)');
    await clickElement(page, "a.movie-seances__time"); 
    await clickElement(page, '.buying-scheme__row > span:nth-child(7)');
    await clickElement(page, "button.acceptin-button");
    const pageList = await browser.newPage();
    await pageList.goto("http://qamid.tmweb.ru/client/payment.php");
    await pageList.waitForSelector("h2.ticket__check-title");
    const actual = await getText(page, "h2.ticket__check-title");
    await expect(actual).toContain("Вы выбрали билеты:");
  });

  test("Checks two tickets are bought'", async () => {
    const title = await page.title();
 
    await clickElement(page, '.page-nav > a:nth-child(3)'); //день недели 
    await clickElement(page, "a.movie-seances__time"); //time 
    await clickElement(page, '.buying-scheme__row > span:nth-child(9)'); // seat 
    await clickElement(page, '.buying-scheme__row > span:nth-child(10)');
    await clickElement(page, "button.acceptin-button");
    const pageList = await browser.newPage();
    await pageList.goto("http://qamid.tmweb.ru/client/payment.php");
    await pageList.waitForSelector("h2.ticket__check-title");
    const actual = await getText(page, "h2.ticket__check-title");
    await expect(actual).toContain("Вы выбрали билеты:");

  })

  test("Checks already bought tickets'", async () => {
    const title = await page.title();
await clickElement(page, '.page-nav > a:nth-child(3)');
await clickElement(page, 'a.movie-seances__time');
await clickElement(page, '.buying-scheme__row > span:nth-child(8)');
await clickElement(page, 'button.acceptin-button');
await page.goto('http://qamid.tmweb.ru/client/index.php');
await clickElement(page, '.page-nav > a:nth-child(3)');
await clickElement(page, 'a.movie-seances__time');
await clickElement(page, '.buying-scheme__row > span:nth-child(8)');
expect(
  String(
    await page.$eval('button', (button) => {
      return button.disabled;
    })
  )
).toContain('true');
});
});
