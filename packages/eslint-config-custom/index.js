module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:svelte/recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	globals: {
		NodeJS: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	ignorePatterns: [
		// Ignore generated files
		'node_modules/',
		'.svelte-kit/',
		'build/',

		// Ignore environment files
		'.env*',
		'!*.example',

		// Ignore package manager lock files
		'pnpm-lock.yaml',
		'package-lock.json',
		'yarn.lock',
		'dist'
	]
}
