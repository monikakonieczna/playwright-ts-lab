import { Locator, Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class NavigationPage extends HelperBase {
    readonly formLayoutsMenuItem: Locator;
    readonly datePickerMenuItem: Locator;
    readonly smartTableMenuItem: Locator;
    readonly toastrMenuItem: Locator;
    readonly tooltipMenuItem: Locator;

    constructor(page: Page) {
        super(page);
        this.formLayoutsMenuItem = page.getByText('Form Layouts');
        this.datePickerMenuItem = page.getByText('Datepicker');
        this.smartTableMenuItem = page.getByText('Smart Table');
        this.tooltipMenuItem = page.getByText('Tooltip');
        this.toastrMenuItem = page.getByText('Toastr');
    }

    async formLayoutsPage() {
        await this.selectGroupMenuItem('Forms');
        await this.formLayoutsMenuItem.click();
    }

    async datePickerPage() {
        await this.selectGroupMenuItem('Forms');
        await this.datePickerMenuItem.click();
    }

    async smartTablePage() {
        await this.selectGroupMenuItem('Table & Data');
        await this.smartTableMenuItem.click();
    }

    async tooltipPage() {
        await this.selectGroupMenuItem('Modal & Overlays');
        await this.tooltipMenuItem.click();
    }

    async toastrPage() {
        await this.selectGroupMenuItem('Modal & Overlays');
        await this.toastrMenuItem.click();
    }

    /**
     * Helper method to check main menu state (expanded | collapsed)
     * @param groupItemTitle 
     */
    private async selectGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle);
        const expandedStatus = await groupMenuItem.getAttribute('aria-expanded');
        if (expandedStatus == 'false') {
            await groupMenuItem.click();
        }
    }
}