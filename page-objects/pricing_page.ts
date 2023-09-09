import { Page, expect } from "@playwright/test";
import * as util from "util";

export class PricingPage {

    page:Page;

    constructor(page) {
        this.page = page;
    }

    async goToSection(section:string) {
        await this.page.getByText(section).click();
    }

    async selectTestRequirementAndPlan(requirement:string, plan:string) {
        var locator = util.format('//img[@alt="%s"]', requirement);
        if (requirement != 'Manual Testing') {
            await this.page.click(locator);
        }
        locator = util.format('(//h2[text()="%s"]//ancestor::div[@id="each_product"]//button//img)[1]', plan);
        
        //Assert page basd on plan selected
        if (plan == 'Free') {
            await this.page.click(locator);
            expect (await this.page.title()).toMatch('Sign up for free | Cross Browser Testing Tool | LambdaTest');
        } else if (plan == 'Enterprise') {
            const [newPage] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.click('(//h2[text()="Enterprise"]//ancestor::div[@id="each_product"]//a//img)[1]')]);
            await newPage.waitForLoadState();
            expect (await newPage.title()).toMatch('Contact LambdaTest to Fulfil All your Cross Browser Testing Needs'); 
            await newPage.close();
        } else {
            await this.page.click(locator);
            expect (await this.page.url()).toContain('https://billing.lambdatest.com/'); 
        }
    }
}