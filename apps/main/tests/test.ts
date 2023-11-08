import { expect, test } from '@playwright/test'

test('index page has expected toolbar', async ({ page }) => {
	await page.goto('/')
	await expect(page.getByRole('toolbar')).toBeVisible()
})
