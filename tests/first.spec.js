import { test, expect } from '@playwright/test';


test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('https://playwright.dev/');
    });

    test('main navigation', async ({ page }) => {
        // Assertions use the expect API.
        await expect(page).toHaveURL('https://playwright.dev/');
    });
    test('has title', async ({ page }) => {
        //await page.goto('https://playwright.dev/');

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('get started link', async ({ page }) => {
        //await page.goto('https://playwright.dev/');

        // Click the get started link.
        await page.getByRole('link', { name: 'Get started' }).click();

        // Expects page to have a heading with the name of Installation.
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });
});


test('test', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('test 1');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('test 2');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
    await page.getByRole('link', { name: 'Active' }).click();
    await page.getByRole('link', { name: 'Completed' }).click();
    await page.getByRole('link', { name: 'All' }).click();
    await page.getByRole('listitem').filter({ hasText: 'test 1' }).getByLabel('Toggle Todo').check();
    await page.getByText('Mark all as complete').click();
    await page.getByText('Mark all as complete').click();
    await page.getByRole('listitem').filter({ hasText: 'test 1' }).getByLabel('Toggle Todo').check();
    await page.getByRole('link', { name: 'Completed' }).click();
    await page.getByRole('link', { name: 'Active' }).click();
    await page.getByTestId('todo-title').click();
    await expect(page.getByTestId('todo-title')).toBeVisible();
    await expect(page.getByTestId('todo-title')).toBeVisible();
});
