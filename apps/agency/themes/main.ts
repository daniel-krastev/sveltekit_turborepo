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
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '255 255 255',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #ac9384
		'--color-primary-50': '243 239 237', // #f3efed
		'--color-primary-100': '238 233 230', // #eee9e6
		'--color-primary-200': '234 228 224', // #eae4e0
		'--color-primary-300': '222 212 206', // #ded4ce
		'--color-primary-400': '197 179 169', // #c5b3a9
		'--color-primary-500': '172 147 132', // #ac9384
		'--color-primary-600': '155 132 119', // #9b8477
		'--color-primary-700': '129 110 99', // #816e63
		'--color-primary-800': '103 88 79', // #67584f
		'--color-primary-900': '84 72 65', // #544841
		// secondary | #9e5758
		'--color-secondary-50': '240 230 230', // #f0e6e6
		'--color-secondary-100': '236 221 222', // #ecddde
		'--color-secondary-200': '231 213 213', // #e7d5d5
		'--color-secondary-300': '216 188 188', // #d8bcbc
		'--color-secondary-400': '187 137 138', // #bb898a
		'--color-secondary-500': '158 87 88', // #9e5758
		'--color-secondary-600': '142 78 79', // #8e4e4f
		'--color-secondary-700': '119 65 66', // #774142
		'--color-secondary-800': '95 52 53', // #5f3435
		'--color-secondary-900': '77 43 43', // #4d2b2b
		// tertiary | #39068f
		'--color-tertiary-50': '225 218 238', // #e1daee
		'--color-tertiary-100': '215 205 233', // #d7cde9
		'--color-tertiary-200': '206 193 227', // #cec1e3
		'--color-tertiary-300': '176 155 210', // #b09bd2
		'--color-tertiary-400': '116 81 177', // #7451b1
		'--color-tertiary-500': '57 6 143', // #39068f
		'--color-tertiary-600': '51 5 129', // #330581
		'--color-tertiary-700': '43 5 107', // #2b056b
		'--color-tertiary-800': '34 4 86', // #220456
		'--color-tertiary-900': '28 3 70', // #1c0346
		// success | #4e5f06
		'--color-success-50': '228 231 218', // #e4e7da
		'--color-success-100': '220 223 205', // #dcdfcd
		'--color-success-200': '211 215 193', // #d3d7c1
		'--color-success-300': '184 191 155', // #b8bf9b
		'--color-success-400': '131 143 81', // #838f51
		'--color-success-500': '78 95 6', // #4e5f06
		'--color-success-600': '70 86 5', // #465605
		'--color-success-700': '59 71 5', // #3b4705
		'--color-success-800': '47 57 4', // #2f3904
		'--color-success-900': '38 47 3', // #262f03
		// warning | #42c45f
		'--color-warning-50': '227 246 231', // #e3f6e7
		'--color-warning-100': '217 243 223', // #d9f3df
		'--color-warning-200': '208 240 215', // #d0f0d7
		'--color-warning-300': '179 231 191', // #b3e7bf
		'--color-warning-400': '123 214 143', // #7bd68f
		'--color-warning-500': '66 196 95', // #42c45f
		'--color-warning-600': '59 176 86', // #3bb056
		'--color-warning-700': '50 147 71', // #329347
		'--color-warning-800': '40 118 57', // #287639
		'--color-warning-900': '32 96 47', // #20602f
		// error | #a6b4c7
		'--color-error-50': '242 244 247', // #f2f4f7
		'--color-error-100': '237 240 244', // #edf0f4
		'--color-error-200': '233 236 241', // #e9ecf1
		'--color-error-300': '219 225 233', // #dbe1e9
		'--color-error-400': '193 203 216', // #c1cbd8
		'--color-error-500': '166 180 199', // #a6b4c7
		'--color-error-600': '149 162 179', // #95a2b3
		'--color-error-700': '125 135 149', // #7d8795
		'--color-error-800': '100 108 119', // #646c77
		'--color-error-900': '81 88 98', // #515862
		// surface | #3b008e
		'--color-surface-50': '226 217 238', // #e2d9ee
		'--color-surface-100': '216 204 232', // #d8cce8
		'--color-surface-200': '206 191 227', // #cebfe3
		'--color-surface-300': '177 153 210', // #b199d2
		'--color-surface-400': '118 77 176', // #764db0
		'--color-surface-500': '59 0 142', // #3b008e
		'--color-surface-600': '53 0 128', // #350080
		'--color-surface-700': '44 0 107', // #2c006b
		'--color-surface-800': '35 0 85', // #230055
		'--color-surface-900': '29 0 70' // #1d0046
	}
	// properties_dark: {
	// Optionally provide dark mode overrides for your CSS custom properties here
	// }
}
