import { test as base } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

export type TestOptions = {
    globalsQaUrls: string;
    formLayoutsPage: string;
    pageManager: PageManager;
}

export const test = base.extend<TestOptions>({
    globalsQaUrls: ['', { option: true }],

    formLayoutsPage: async ({ page }, use) => {
        await page.goto('/');
        await page.getByText('Forms').click();
        await page.getByText('Form Layouts').click();
        await use('');
    },

    // eslint-disable-next-line no-unused-vars
    pageManager: async({ page, formLayoutsPage }, use) => {
        const pm = new PageManager(page);
        await use(pm);
    }
});