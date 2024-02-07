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
				DEFAULT: '#f94144',
				light: '#fa9d9f'
			},
			orange: {
				DEFAULT: '#f8961e'
				// light: '#f7c68b' // I do not use it so far
			},
			yellow: {
				DEFAULT: '#f9c74f',
				light: '#fdf1d3'
			},
			green: {
				DEFAULT: '#90be6d',
				medium: '#9dcd79',
				light: '#e3efda'
			},
			turquoise: {
				DEFAULT: '#4d908e'
			},
			sea: {
				DEFAULT: '#277da1',
				light: '#d5dce3'
			},
			water: {
				DEFAULT: '#264653',
				light: '#9fb3bc'
			},
			malt: {
				DEFAULT: '#e9c46a',
				light: '#eae1cd'
			},
			hop: {
				DEFAULT: '#2a9d8f',
				light: '#a7d4cf'
			},
			yeast: {
				DEFAULT: '#f4a261',
				light: '#ddccbe'
			},
			addition: {
				DEFAULT: '#e76f51',
				light: '#e0c5bf'
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
		extend: {
			strokeWidth: {
				3: '3px'
			},
			textUnderlineOffset: {
				'-2': '-2px'
			}
		}
	},
	plugins: []
};
