import { test } from '@playwright/test';

/**
 * This 'beforeEach' hook navigates to the homepage
 * It is executed before each test in the current file, including the tests
 * in 'Test Suite 1' and 'Test Suite 2' suites.
 */
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200');
});

/**
 * Use 'describe' to group related tests into a suite.
 */
test.describe('Forms Smoke Suite', () => {
  /**
   * This 'beforeEach' hook is executed before each test in this 'describe' block.
   */
  test.beforeEach(async ({ page }) => {
    await page.getByText('Forms').click();
  }
  )
  test('Should load the Form Layouts successfully.', async ({ page }) => {
    await page.getByText('Form Layouts').click();
  });
  test('Should load the Datepicker successfully.', async ({ page }) => {
    await page.getByText('Datepicker').click();
  });

})

/**
 * Use 'describe' to group related tests into a suite.
 */
test.describe('Tables & Data Smoke Suite', () => {
  /**
   * This 'beforeEach' hook is executed before each test in this 'describe' block.
   */
  test.beforeEach(async ({ page }) => {
    await page.getByText('Tables & Data').click();
  }
  )
  test('Should load the Smart Table successfully.', async ({ page }) => {
    await page.getByText('Smart Table').click();
  });
  test('Should load the Tree Grid successfully.', async ({ page }) => {
    await page.getByText('Tree Grid').click();
  });

})