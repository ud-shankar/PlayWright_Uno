import { Page } from "@playwright/test";

export class keyword {

    page:Page

    constructor(page:Page) {
        this.page = page;
    }

}