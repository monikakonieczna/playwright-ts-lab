import { Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class FormLayoutPage extends HelperBase {

    constructor(page: Page) {
        super(page);
    }
    /**
     * This method fill out the grid form with user details
     * @param email - valid email 
     * @param password - valid password
     * @param optionText - valid option name in the group
     */
    async submitUsingTheGridFormWithCredentialsAndSelectOption(email: string, password: string, optionText: string) {
        const usingTheGridPage = this.page.locator('nb-card', { hasText: 'Using the Grid' });
        await usingTheGridPage.getByRole('textbox', { name: 'Email' }).fill(email);
        await usingTheGridPage.getByRole('textbox', { name: 'Password' }).fill(password);
        await usingTheGridPage.getByRole('radio', { name: optionText }).check({ force: true });
        await usingTheGridPage.getByRole('button').click();
    }
    /**
     * This method fill out the inline form with user details
     * @param name - should be first and last name
     * @param email - valid email 
     * @param rememberMe - true or false if user session to be saved
     */
    async submitUsingInlineFormWithNameEmailAndCheckbox(name: string, email: string, rememberMe: boolean) {
        const inlineForm = this.page.locator('nb-card', { hasText: 'Inline form' });
        await inlineForm.getByRole('textbox', { name: 'Jane Doe' }).fill(name);
        await inlineForm.getByRole('textbox', { name: 'Email' }).fill(email);
        if (rememberMe) {
            await inlineForm.getByRole('checkbox').check({ force: true });
        }
        await inlineForm.getByRole('button').click();
    }
}