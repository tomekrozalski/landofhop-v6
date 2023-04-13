import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			black: '#222',
			white: '#fff',
			transparent: colors.transparent,
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
		container: {
			center: true,
			screens: {
				sm: '100%',
				lg: '1030px',
				xl: '1160px'
			}
		},
		fontFamily: {
			sans: ['bilo', ...defaultTheme.fontFamily.sans]
		},
		fontWeight: {
			normal: '300',
			medium: '400',
			bold: '500'
		},
		extend: {}
	},
	plugins: []
};
