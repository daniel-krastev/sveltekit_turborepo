import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm run build && pnpm run preview',
		url: 'http://localhost:4174'
	},
	use: {
		// Base URL to use in actions like `await page.goto('/')`.
		baseURL: 'http://localhost:4174'
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
}

export default config
