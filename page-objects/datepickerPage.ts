import { expect, Locator, Page } from '@playwright/test';
import { HelperBase } from './helperBase';

// #region Types
type DatepickerType = 'common' | 'range';
// #endregion

export class DatepickerPage extends HelperBase {
    readonly calendarMonthAndYear: Locator;
    readonly calendarDayCellCommon: Locator;
    readonly calendarDayCellRange: Locator;
    readonly calendarNavigation: Locator;
    readonly calendarInputFieldCommonDatepicker: Locator;
    readonly calendarInputFieldDatepickerWithRange: Locator;

    constructor(page: Page) {
        super(page);
        this.calendarMonthAndYear = this.page.locator('nb-calendar-view-mode');
        this.calendarNavigation = this.page.locator('[data-name="chevron-right"]');
        this.calendarDayCellCommon = this.page.locator('[class="day-cell ng-star-inserted"]');
        this.calendarDayCellRange = this.page.locator('[class="range-cell day-cell ng-star-inserted"]');
        this.calendarInputFieldCommonDatepicker = this.page.getByPlaceholder('Form Picker');
        this.calendarInputFieldDatepickerWithRange = this.page.getByPlaceholder('Range Picker');
    }

    private async selectDate(numberOfDaysFromToday: number, datepickerType: DatepickerType) {
        let date = new Date();
        date.setDate(date.getDate() + numberOfDaysFromToday);
        const expectedDate = date.getDate().toString();
        const expectedMonthShort = date.toLocaleString('EN-US', { month: 'short' });
        const expectedMonthLong = date.toLocaleString('EN-US', { month: 'long' });
        const expectedYear = date.getFullYear();
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;

        let calendarMonthAndYear = await this.calendarMonthAndYear.textContent();
        const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;
        while (!calendarMonthAndYear?.includes(expectedMonthAndYear)) {
            await this.calendarNavigation.click();
            calendarMonthAndYear = await this.calendarMonthAndYear.textContent();
        }
        if (datepickerType === 'common') {
            await this.calendarDayCellCommon.getByText(expectedDate, { exact: true }).click();
        }
        else if (datepickerType === 'range') {
            await this.calendarDayCellRange.getByText(expectedDate, { exact: true }).click();
        }
        return dateToAssert;
    }

    async selectDateFromTodayInCommonDatePicker(numberOfDaysFromToday: number) {
        await this.calendarInputFieldCommonDatepicker.click();
        const dateToAssert = await this.selectDate(numberOfDaysFromToday, 'common');
        await expect(this.calendarInputFieldCommonDatepicker).toHaveValue(dateToAssert);
    }

    async selectRangeFromTodayInDatePicker(startDay: number, endDate: number) {
        await this.calendarInputFieldDatepickerWithRange.click();
        const dateToAssertStart = await this.selectDate(startDay, 'range');
        const dateToAssertEnd = await this.selectDate(endDate, 'range');
        const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`;
        await expect(this.calendarInputFieldDatepickerWithRange).toHaveValue(dateToAssert);
    }
}