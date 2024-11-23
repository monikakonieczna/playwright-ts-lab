import { test } from '@playwright/test';
import { NavigationPage, DatepickerPage } from '../../page-objects';

let navigateTo: NavigationPage;
let onDatePickerPage: DatepickerPage;

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    navigateTo = new NavigationPage(page);
    onDatePickerPage = new DatepickerPage(page);
    await navigateTo.datePickerPage();
});

test('Should select date in Common Datepicker correctly', async ({ }) => {
    await onDatePickerPage.selectDateFromTodayInCommonDatePicker(5);
});

test('Should select date range in Datepicker With Range correctly', async ({ }) => {
    await onDatePickerPage.selectRangeFromTodayInDatePicker(1, 2);
});
