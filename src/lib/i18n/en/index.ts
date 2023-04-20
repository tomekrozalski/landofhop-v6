import type { Translation } from '../i18n-types';

const en = {
	about: {
		header: 'About the app'
	},
	header: {
		closeNavigation: 'Close navigation',
		openNavigation: 'Open navigation',
		search: 'Search'
	},
	link: '/en{0}',
	navigation: {
		about: 'About',
		addNewBeverage: 'Add new beverage',
		brands: 'Brands',
		places: 'Places',
		login: 'Login',
		logout: 'Logout',
		stats: 'Stats'
	},
	pages: {
		home: {
			description: 'Database of beers that I drunk last years'
		},
		login: {
			email: 'E-mail',
			submit: 'Send',
			title: 'Log in'
		}
	}
} satisfies Translation;

export default en;
