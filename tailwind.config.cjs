// import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			black: '#222',
			white: '#fff',
			gray: colors.gray,
			red: {
				DEFAULT: '#f94144'
			},
			orange: {
				DEFAULT: '#f8961e'
			},
			yellow: {
				DEFAULT: '#f9c74f'
			},
			green: {
				DEFAULT: '#90be6d'
			},
			turquoise: {
				DEFAULT: '#4d908e'
			},
			sea: {
				DEFAULT: '#277da1'
			}
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
