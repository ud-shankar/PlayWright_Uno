import { Page } from "@playwright/test";

export class HomePage {

    page: Page;

    constructor(page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto("https://www.lambdatest.com/");
        //Assert page title after successful navigation
        (await (this.page).title()).match('Next-Generation Mobile Apps and Cross Browser Testing Cloud | LambdaTest');
    }

}