const puppeteer = require('puppeteer');
const chai = require('chai');
const expect = chai.expect;
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { clickElement, putText, getText } = require('../../lib/commands.js');

Before(async function () {
	const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
	const page = await browser.newPage();
	this.browser = browser;
	this.page = page;
});

After(async function () {
	if (this.browser) {
		await this.browser.close();
	}
});



Given('user is on {string} page', async function (string) {
	return await this.page.goto(`${string}`, {
		setTimeout: 20000,
	});
});

When('user choose day {string}', async function (string) {
	await clickElement(this.page, `${string}`); //choose day
});
When('user choose time {string}', async function (string) {
	await clickElement(this.page, `${string}`); //choose time
});
When('user choose chair {string}', async function (string) {
	await clickElement(this.page, `${string}`); //choose chair
});
When('user click booking {string}', async function (string) {
	await clickElement(this.page, `${string}`); //click booking

Then('user sees text {string}', async function (string) {
    const actual = await getText(this.page, 'h2.ticket__check-title');
    const expected = await string;
    expect(actual).contains(expected);
  });
});


Given('user goes to {string} page', async function (string) {
		return await this.page.goto(`${string}`, {
			setTimeout: 20000,
		});
	});

When('user chooses weekday {string}', async function (string) {
	await clickElement(this.page, `${string}`); //choose day
});
When('user chooses movietime {string}', async function (string) {
	await clickElement(this.page, `${string}`); //choose time
});
When('user chooses seat {string}', async function (string) {
	await clickElement(this.page, `${string}`); //choose chair
});
When('user choose second chair {string}', async function (string) {
	await clickElement(this.page, `${string}`); //choose chair
});
When('user clicks affirmation {string}', async function (string) {
	await clickElement(this.page, `${string}`); //click booking

Then('user sees success {string}', async function (string) {
    const actual = await getText(this.page, 'h2.ticket__check-title');
    const expected = await string;
    expect(actual).contains(expected);
  });
});


