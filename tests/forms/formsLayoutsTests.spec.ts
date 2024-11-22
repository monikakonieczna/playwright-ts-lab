import { test } from '@playwright/test';
import { NavigationPage, FormLayoutPage } from '../../page-objects';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
});

test('Should allow user to fill and submit grid form correctly', async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const onFormLayoutPage = new FormLayoutPage(page);

  await navigateTo.formLayoutsPage();
  await onFormLayoutPage.submitUsingTheGridFormWithCredentialsAndSelectOption('email@gmail.com', 'Test123', 'Option 1');
});
test('Should allow user to complete inline form and submit successfully', async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const onFormLayoutPage = new FormLayoutPage(page);

  await navigateTo.formLayoutsPage();
  await onFormLayoutPage.submitUsingInlineFormWithNameEmailAndCheckbox('Katarzyna Klak', 'email@gmail.com', true);
})