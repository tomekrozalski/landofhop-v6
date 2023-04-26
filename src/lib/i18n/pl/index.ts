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
		openNavigation: 'Otwórz nawigację',
		search: 'Szukaj'
	},
	link: '{0}',
	navigation: {
		about: 'O stronie',
		addNewBeverage: 'Dodaj nowe piwo',
		brands: 'Marki',
		login: 'Zaloguj',
		logout: 'Wyloguj',
		places: 'Miejsca',
		stats: 'Statystyki'
	},
	pages: {
		home: {
			description: 'Baza piw, które wypiłem w przeciągu ostatnich lat'
		},
		listing: {
			imageNotFound: 'Nie znaleziono zdjęcia'
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
