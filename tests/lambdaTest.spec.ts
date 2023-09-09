import { test, Page, Browser, BrowserContext, chromium } from "@playwright/test";
import { HomePage } from "../page-objects/home_page";
import { PricingPage } from "../page-objects/pricing_page";

// let browser:Browser;
// let context:BrowserContext;
// let page:Page;

// browser = await chromium.launch();
// context = await browser.newContext();
// page = await context.newPage();
// const homePage = new HomePage(page);
// const pricingPage = new PricingPage(page);

test.beforeEach(async ({page})=>{
    const homePage = new HomePage(page);
    await homePage.navigateToHomePage();
});

test('Navigate to LambdaTest pricing page', async ({page}) => {
    const pricingPage = new PricingPage(page);
    await pricingPage.goToSection('Pricing');
    await pricingPage.selectTestRequirementAndPlan('Manual Testing', 'Enterprise');
    await pricingPage.selectTestRequirementAndPlan('Web Automation Testing', 'Web & Mobile Browser on Real Device');
});