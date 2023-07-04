import type { Translation } from '../i18n-types';

const en = {
	about: {
		header: 'About the app'
	},
	breadcrumbs: {
		details: 'details',
		list: 'list'
	},
	details: {
		gallery: {
			cap: {
				hide: 'hide cap',
				show: 'show cap',
				title: '{name}, cap'
			},
			imageNotFound: 'Image not found',
			viewFromAbove: {
				hide: 'hide view from above',
				show: 'show view from above',
				title: '{name}, view from above'
			}
		}
	},
	forms: {
		validation: {
			required: 'Field is required'
		}
	},
	header: {
		closeNavigation: 'Close navigation',
		closeSearchbar: 'Close searchbar',
		openNavigation: 'Open navigation',
		openSearchbar: 'Open searchbar',
		search: 'Search'
	},
	link: '/en{0}',
	log: `This log was called from '{fileName:string}'`,
	navigation: {
		about: 'About',
		addBeverage: 'Add new beverage',
		brands: 'Brands',
		places: 'Places',
		stats: 'Stats'
	},
	pages: {
		home: {
			description: 'Database of beers that I drunk last years'
		},
		listing: {
			imageNotFound: 'Image not found',
			noBeverageFound: 'No beverage found',
			theNewestMonth: 'this is the newest month',
			theOldestMonth: 'this is the oldest month'
		},
		login: {
			email: 'E-mail',
			incorrectEmail: 'The field should be valid e-mail address',
			loggedIn: 'You have successfully logged in',
			password: 'Password',
			submit: 'Send',
			title: 'Log in',
			tryAgain: 'Login failed. Try again!'
		}
	}
} satisfies Translation;

export default en;
