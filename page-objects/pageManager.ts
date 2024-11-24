import { Page } from '@playwright/test';
import { NavigationPage, DatepickerPage, FormLayoutPage } from '../page-objects';



export class PageManager {
    private readonly page: Page;
    private readonly navigationPage: NavigationPage;
    private readonly datepickerPage: DatepickerPage;
    private readonly formLayoutPage: FormLayoutPage;

    constructor(page: Page) {
        this.page = page;
        this.datepickerPage = new DatepickerPage(this.page);
        this.formLayoutPage = new FormLayoutPage(this.page);
        this.navigationPage = new NavigationPage(this.page);
    }

    navigateTo() {
        return this.navigationPage;
    }

    onFormLayoutPage() {
        return this.formLayoutPage;
    }

    onDatepickerPage() {
        return this.datepickerPage;
    }
}