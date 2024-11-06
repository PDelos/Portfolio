import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				lg: '1200px', // Change the value as needed
			},
		}
	},

	plugins: [typography, daisyui]
} satisfies Config;
