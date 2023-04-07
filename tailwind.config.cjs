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
			sans: ['bilo', 'sans-serif']
		},
		fontWeight: {
			normal: '300',
			medium: '400',
			bold: '500'
		},
		container: {
			center: true,
			screens: {
				sm: '100%',
				lg: '1030px',
				xl: '1160px'
			}
		},
		extend: {
			gridTemplateColumns: {
				header: 'minmax(6rem, auto) 1fr minmax(6rem, auto)'
			},
			keyframes: {
				smoothColor: {
					'0%': { stroke: '#f8961e' },
					'50%': { stroke: '#90be6d' },
					'100%': { stroke: '#f8961e' }
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
