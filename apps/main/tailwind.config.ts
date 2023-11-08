import { join } from 'path'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { mainTheme } from './themes/main'

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'../../packages/components/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
		textColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
		cursor: ['disabled']
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [mainTheme]
			}
		})
	]
} satisfies Config

export default config
