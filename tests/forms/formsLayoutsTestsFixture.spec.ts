import { test } from '../../testOptions';
//import { PageManager } from '../../page-objects';
import { Chance } from 'chance';

// #region - test constants

const chance = new Chance();
const name = chance.name();
const email = chance.email();

// #endregion - test constants

test('Should allow user to complete inline form and submit successfully', async ({ pageManager }) => {
    await pageManager.onFormLayoutPage().submitUsingInlineFormWithNameEmailAndCheckbox(name, email, true);
})