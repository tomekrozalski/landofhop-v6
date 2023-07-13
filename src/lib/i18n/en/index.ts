import type { Translation } from '../i18n-types';

const en = {
	breadcrumbs: {
		details: 'details',
		list: 'list'
	},
	global: {
		confirmation: 'yes',
		denial: 'no',
		longConjunction: 'and',
		shortConjunction: 'and'
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
	navigation: {
		about: 'About',
		addBeverage: 'Add new beverage',
		brands: 'Brands',
		places: 'Places',
		stats: 'Stats'
	},
	pages: {
		about: {
			header: 'About the app'
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
			},
			header: {
				brewed: 'Brewed',
				by: 'by',
				for: 'for',
				inCooperationWith: 'in cooperation with',
				series: ', in series'
			},
			navigation: {
				next: 'Next beverage',
				previous: 'Previous beverage'
			},
			ratings: {
				hideDetails: 'hide details',
				quantity: '{0} {{rate|rates}}',
				showDetails: 'show details',
				title: 'Community assessment',
				updatedAt: 'last update {0}'
			},
			tale: {
				readLess: 'read less',
				readMore: 'read more'
			},
			testimony: {
				alcohol: 'alcohol',
				alcoholScope: {
					m500: '<0.5%',
					pm500: '±0.5%',
					pm1000: '±1.0%'
				},
				alcoholValue: '{value}{unit|{degree: °, percent: %}} {relate|{capacity: cap., abv: Abv}}',
				barcode: 'barcode',
				city: 'city',
				country: 'country',
				dryHopped: 'dry hopped',
				extract: 'ekstrakt',
				extractValue:
					'{value}{unit|{degree: °, percent: %}} {relate|{weight: weight, blg: Blg, plato: Plato}}',
				fermentation: 'fermentation',
				fermentationType: {
					bottom: 'bottom',
					spontaneous: 'spontaneous',
					top: 'top'
				},
				filtration: 'filtration',
				hopRate: 'hop rate',
				hopRateValue: '{value} {unit|{gl: g/L}}',
				pasteurization: 'pasteurization'
			}
		},
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
