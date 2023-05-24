import type { BaseTranslation } from '../i18n-types';

const pl = {
	about: {
		header: 'O stronie'
	},
	breadcrumbs: {
		list: 'lista'
	},
	forms: {
		validation: {
			required: 'Pole jest wymagane'
		}
	},
	header: {
		closeNavigation: 'Zamknij nawigację',
		closeSearchbar: 'Zamnij wyszukiwarkę',
		openNavigation: 'Otwórz nawigację',
		openSearchbar: 'Otwórz wyszukiwarkę',
		search: 'Szukaj'
	},
	link: '{0}',
	log: `To zostało wywołane przez '{fileName:string}'`,
	navigation: {
		about: 'O stronie',
		addBeverage: 'Dodaj piwo',
		brands: 'Marki',
		places: 'Miejsca',
		stats: 'Statystyki'
	},
	pages: {
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
