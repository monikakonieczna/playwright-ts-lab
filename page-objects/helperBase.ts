import { Page } from '@playwright/test';

export class HelperBase {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async pauseForSecond(durationInSeconds: number) {
        await this.page.waitForTimeout(durationInSeconds * 1000);
    }

}