import { test } from '@playwright/test';
import { PageManager } from '../../page-objects';

let pageManager: PageManager;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  pageManager = new PageManager(page);
  await pageManager.navigateTo().formLayoutsPage();
});

test('Should allow user to fill and submit grid form correctly', {tag: ['@initial', '@gridform']}, async ({ }) => {
  await pageManager.onFormLayoutPage().submitUsingTheGridFormWithCredentialsAndSelectOption('email@gmail.com', 'Test123', 'Option 1');
});
test('Should allow user to complete inline form and submit successfully', async ({ }) => {

  await pageManager.onFormLayoutPage().submitUsingInlineFormWithNameEmailAndCheckbox('Katarzyna Klak', 'email@gmail.com', true);
})