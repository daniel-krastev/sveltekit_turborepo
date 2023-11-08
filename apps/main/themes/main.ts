import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin'

export const mainTheme: CustomThemeConfig = {
	name: 'main-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #5ca01b
		'--color-primary-50': '231 241 221', // #e7f1dd
		'--color-primary-100': '222 236 209', // #deecd1
		'--color-primary-200': '214 231 198', // #d6e7c6
		'--color-primary-300': '190 217 164', // #bed9a4
		'--color-primary-400': '141 189 95', // #8dbd5f
		'--color-primary-500': '92 160 27', // #5ca01b
		'--color-primary-600': '83 144 24', // #539018
		'--color-primary-700': '69 120 20', // #457814
		'--color-primary-800': '55 96 16', // #376010
		'--color-primary-900': '45 78 13', // #2d4e0d
		// secondary | #bed102
		'--color-secondary-50': '245 248 217', // #f5f8d9
		'--color-secondary-100': '242 246 204', // #f2f6cc
		'--color-secondary-200': '239 244 192', // #eff4c0
		'--color-secondary-300': '229 237 154', // #e5ed9a
		'--color-secondary-400': '210 223 78', // #d2df4e
		'--color-secondary-500': '190 209 2', // #bed102
		'--color-secondary-600': '171 188 2', // #abbc02
		'--color-secondary-700': '143 157 2', // #8f9d02
		'--color-secondary-800': '114 125 1', // #727d01
		'--color-secondary-900': '93 102 1', // #5d6601
		// tertiary | #d37a4a
		'--color-tertiary-50': '248 235 228', // #f8ebe4
		'--color-tertiary-100': '246 228 219', // #f6e4db
		'--color-tertiary-200': '244 222 210', // #f4ded2
		'--color-tertiary-300': '237 202 183', // #edcab7
		'--color-tertiary-400': '224 162 128', // #e0a280
		'--color-tertiary-500': '211 122 74', // #d37a4a
		'--color-tertiary-600': '190 110 67', // #be6e43
		'--color-tertiary-700': '158 92 56', // #9e5c38
		'--color-tertiary-800': '127 73 44', // #7f492c
		'--color-tertiary-900': '103 60 36', // #673c24
		// success | #79d55f
		'--color-success-50': '235 249 231', // #ebf9e7
		'--color-success-100': '228 247 223', // #e4f7df
		'--color-success-200': '222 245 215', // #def5d7
		'--color-success-300': '201 238 191', // #c9eebf
		'--color-success-400': '161 226 143', // #a1e28f
		'--color-success-500': '121 213 95', // #79d55f
		'--color-success-600': '109 192 86', // #6dc056
		'--color-success-700': '91 160 71', // #5ba047
		'--color-success-800': '73 128 57', // #498039
		'--color-success-900': '59 104 47', // #3b682f
		// warning | #f4a09b
		'--color-warning-50': '253 241 240', // #fdf1f0
		'--color-warning-100': '253 236 235', // #fdeceb
		'--color-warning-200': '252 231 230', // #fce7e6
		'--color-warning-300': '251 217 215', // #fbd9d7
		'--color-warning-400': '247 189 185', // #f7bdb9
		'--color-warning-500': '244 160 155', // #f4a09b
		'--color-warning-600': '220 144 140', // #dc908c
		'--color-warning-700': '183 120 116', // #b77874
		'--color-warning-800': '146 96 93', // #92605d
		'--color-warning-900': '120 78 76', // #784e4c
		// error | #592cea
		'--color-error-50': '230 223 252', // #e6dffc
		'--color-error-100': '222 213 251', // #ded5fb
		'--color-error-200': '214 202 250', // #d6cafa
		'--color-error-300': '189 171 247', // #bdabf7
		'--color-error-400': '139 107 240', // #8b6bf0
		'--color-error-500': '89 44 234', // #592cea
		'--color-error-600': '80 40 211', // #5028d3
		'--color-error-700': '67 33 176', // #4321b0
		'--color-error-800': '53 26 140', // #351a8c
		'--color-error-900': '44 22 115', // #2c1673
		// surface | #60b7e9
		'--color-surface-50': '231 244 252', // #e7f4fc
		'--color-surface-100': '223 241 251', // #dff1fb
		'--color-surface-200': '215 237 250', // #d7edfa
		'--color-surface-300': '191 226 246', // #bfe2f6
		'--color-surface-400': '144 205 240', // #90cdf0
		'--color-surface-500': '96 183 233', // #60b7e9
		'--color-surface-600': '86 165 210', // #56a5d2
		'--color-surface-700': '72 137 175', // #4889af
		'--color-surface-800': '58 110 140', // #3a6e8c
		'--color-surface-900': '47 90 114' // #2f5a72
	}
	// properties_dark: {
	// Optionally provide dark mode overrides for your CSS custom properties here
	// }
}
