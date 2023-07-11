import type { BaseTranslation } from '../i18n-types';

const pl = {
	breadcrumbs: {
		details: 'detale',
		list: 'lista'
	},
	forms: {
		validation: {
			required: 'Pole jest wymagane'
		}
	},
	global: {
		confirmation: 'tak',
		denial: 'nie',
		longConjunction: 'oraz',
		shortConjunction: 'i'
	},
	header: {
		closeNavigation: 'Zamknij nawigację',
		closeSearchbar: 'Zamnij wyszukiwarkę',
		openNavigation: 'Otwórz nawigację',
		openSearchbar: 'Otwórz wyszukiwarkę',
		search: 'Szukaj'
	},
	link: '{0}',
	navigation: {
		about: 'O stronie',
		addBeverage: 'Dodaj piwo',
		brands: 'Marki',
		places: 'Miejsca',
		stats: 'Statystyki'
	},
	pages: {
		about: {
			header: 'O stronie'
		},
		details: {
			gallery: {
				cap: {
					hide: 'schowaj kapsel',
					show: 'pokaż kapsel',
					title: '{name}, kapsel'
				},
				imageNotFound: 'Nie znaleziono zdjęcia',
				viewFromAbove: {
					hide: 'schowaj widok z góry',
					show: 'pokaż widok z góry',
					title: '{name}, widok z góry'
				}
			},
			header: {
				brewed: 'Uwarzono',
				by: 'przez',
				for: 'dla',
				inCooperationWith: 'w kooperacji z',
				series: ', w serii'
			},
			navigation: {
				next: 'Następne piwo',
				previous: 'Poprzednie piwo'
			},
			ratings: {
				hideDetails: 'schowaj szczegóły',
				quantity: '{0} {{głosów|głos|głosy|głosy|głosów}}',
				showDetails: 'pokaż szczegóły',
				title: 'Ocena społeczności',
				updatedAt: 'ostatnia aktualizacja {0}'
			},
			tale: {
				readLess: 'zwiń',
				readMore: 'czytaj więcej'
			},
			testimony: {
				barcode: 'kod kreskowy',
				city: 'miejscowość',
				country: 'kraj',
				fermentation: 'fermentacja',
				fermentationType: {
					bottom: 'dolna',
					spontaneous: 'spontaniczna',
					top: 'górna'
				},
				filtration: 'filtracja'
			}
		},
		home: {
			description: 'Baza piw, które wypiłem w przeciągu ostatnich lat'
		},
		listing: {
			imageNotFound: 'Nie znaleziono zdjęcia',
			noBeverageFound: 'Nie znaleziono żadnej pozycji',
			theNewestMonth: 'to jest najnowszy miesiąc',
			theOldestMonth: 'to jest najstarszy miesiąc'
		},
		login: {
			email: 'E-mail',
			incorrectEmail: 'Wymagany prawidłowy adres e-mail',
			loggedIn: 'Zalogowano poprawnie',
			password: 'Hasło',
			submit: 'Wyślij',
			title: 'Zaloguj się',
			tryAgain: 'Nie udało się zalogować. Spróbuj ponownie!'
		}
	}
} satisfies BaseTranslation;

export default pl;
