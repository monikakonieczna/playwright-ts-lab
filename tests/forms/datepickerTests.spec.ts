import { test } from '@playwright/test';
import { PageManager } from '../../page-objects';

let pageManager: PageManager;

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    pageManager = new PageManager(page);
    await pageManager.navigateTo().datePickerPage();
});

test('Should select date in Common Datepicker correctly', {tag: '@initial'}, async ({ }) => {
    await pageManager.onDatepickerPage().selectDateFromTodayInCommonDatePicker(5);
});

test('Should select date range in Datepicker With Range correctly', async ({ }) => {
    await pageManager.onDatepickerPage().selectRangeFromTodayInDatePicker(1, 2);
});
