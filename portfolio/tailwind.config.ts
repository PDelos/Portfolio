import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				lg: '1200px', // Change the value as needed
			},
			fontFamily: {
				jetbrains: ['"JetBrains Mono"', 'monospace'],
				montserrat: ['"Montserrat"', 'sans-serif'],
				expose: ['"Expose"', 'sans-serif'], 
			},
		}
	},
	daisyui: {
		themes: ["light", "dark", "cupcake"],
	},

	plugins: [daisyui],
} satisfies Config;
