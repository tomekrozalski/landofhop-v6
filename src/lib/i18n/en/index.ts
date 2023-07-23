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
			adminBar: {
				areYouSure: 'Are you sure?',
				notes: 'notes',
				lastTimeUpdated: 'last time updated',
				removeBeverage: 'Remove beverage',
				updateContent: 'Update data',
				updateImages: 'Update photos',
				updateRatings: 'Update ratings'
			},
			footNotes: {
				added: 'dodano'
			},
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
			impressions: {
				bitterness: 'bitterness',
				clarity: {
					title: 'clarity',
					clear: 'clear',
					crystalline: 'crystalline',
					hazy: 'hazy',
					misty: 'zammistyglone',
					muddy: 'muddy',
					opalescent: 'opalescent'
				},
				color: 'color',
				fullness: 'fullness',
				hoppyness: 'hoppyness',
				power: 'power',
				sweetness: 'sweetness'
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
				aged: {
					title: 'aged',
					barrel: {
						title: 'barrel',
						beech: 'inside beech barrel',
						oak: 'inside oak barrel'
					},
					beech: 'beech',
					flow: 'Way of aged {order}',
					oak: 'oak',
					previousContent: {
						title: 'Previous content with which the wood had contact',
						bourbon: 'bourbon',
						cognac: 'cognac',
						content:
							'{item|{bourbon: bourbon, cognac: cognac, porto: porto, redWine: red wine, rum: rum, whisky: whisky}}',
						name: 'after',
						porto: 'porto',
						redWine: 'red wine',
						rum: 'rum',
						whisky: 'whisky'
					},
					timeOfAged: 'Time of aged',
					wood: {
						title: 'wood',
						beech: 'with beech wood',
						oak: 'with oak wood'
					}
				},
				alcohol: 'alcohol',
				alcoholScope: {
					m500: '<0.5%',
					pm500: '±0.5%',
					pm1000: '±1.0%'
				},
				alcoholValue: '{value}{unit|{degree: °, percent: %}} {relate|{capacity: cap., abv: Abv}}',
				barcode: 'barcode',
				city: 'city',
				container: {
					title: 'container',
					color: {
						brown: 'brown',
						golden: 'golden',
						green: 'green',
						black: 'black',
						silver: 'silver',
						transparent: 'transparent'
					},
					material: {
						glass: 'glass',
						aluminum: 'aluminum'
					},
					type: {
						bottle: 'bottle',
						can: 'can'
					},
					unit: {
						ml: 'ml'
					},
					value: '{value} {unit|{ml: ml}}'
				},
				contains: 'contains',
				country: 'country',
				dryHopped: 'dry hopped',
				expirationTime: 'expiration time',
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
				ingredients: 'ingredients',
				ingredientsByTag: 'ingredients by tag',
				nitrogen: 'saturated with nitrogen',
				pasteurization: 'pasteurization',
				price: 'price',
				smokedMalt: 'contains malt dried with smoke',
				style: 'style',
				styleTags: 'style in group',
				temperature: 'serving temperature',
				temperatureUnit: '{0|{celcius: °C}}'
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
	},
	time: {
		day: '{0} {{day|days}}',
		month: '{0} {{month|months}}',
		year: '{0} {{year|years}}'
	}
} satisfies Translation;

export default en;
