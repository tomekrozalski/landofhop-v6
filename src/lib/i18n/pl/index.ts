import type { BaseTranslation } from '../i18n-types';

const pl = {
	about: {
		header: 'O stronie'
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
		login: {
			email: 'E-mail',
			incorrectEmail: 'Wymagany prawidłowy adres e-mail',
			password: 'Hasło',
			submit: 'Wyślij',
			title: 'Zaloguj się'
		}
	}
} satisfies BaseTranslation;

export default pl;
