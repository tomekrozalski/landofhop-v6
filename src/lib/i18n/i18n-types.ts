// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'pl'

export type Locales =
	| 'en'
	| 'pl'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	about: {
		/**
		 * O​ ​s​t​r​o​n​i​e
		 */
		header: string
	}
	breadcrumbs: {
		/**
		 * l​i​s​t​a
		 */
		list: string
	}
	forms: {
		validation: {
			/**
			 * P​o​l​e​ ​j​e​s​t​ ​w​y​m​a​g​a​n​e
			 */
			required: string
		}
	}
	header: {
		/**
		 * Z​a​m​k​n​i​j​ ​n​a​w​i​g​a​c​j​ę
		 */
		closeNavigation: string
		/**
		 * Z​a​m​n​i​j​ ​w​y​s​z​u​k​i​w​a​r​k​ę
		 */
		closeSearchbar: string
		/**
		 * O​t​w​ó​r​z​ ​n​a​w​i​g​a​c​j​ę
		 */
		openNavigation: string
		/**
		 * O​t​w​ó​r​z​ ​w​y​s​z​u​k​i​w​a​r​k​ę
		 */
		openSearchbar: string
		/**
		 * S​z​u​k​a​j
		 */
		search: string
	}
	/**
	 * {​0​}
	 * @param {unknown} 0
	 */
	link: RequiredParams<'0'>
	navigation: {
		/**
		 * O​ ​s​t​r​o​n​i​e
		 */
		about: string
		/**
		 * D​o​d​a​j​ ​p​i​w​o
		 */
		addBeverage: string
		/**
		 * M​a​r​k​i
		 */
		brands: string
		/**
		 * M​i​e​j​s​c​a
		 */
		places: string
		/**
		 * S​t​a​t​y​s​t​y​k​i
		 */
		stats: string
	}
	pages: {
		home: {
			/**
			 * B​a​z​a​ ​p​i​w​,​ ​k​t​ó​r​e​ ​w​y​p​i​ł​e​m​ ​w​ ​p​r​z​e​c​i​ą​g​u​ ​o​s​t​a​t​n​i​c​h​ ​l​a​t
			 */
			description: string
		}
		listing: {
			/**
			 * N​i​e​ ​z​n​a​l​e​z​i​o​n​o​ ​z​d​j​ę​c​i​a
			 */
			imageNotFound: string
			/**
			 * N​i​e​ ​z​n​a​l​e​z​i​o​n​o​ ​ż​a​d​n​e​j​ ​p​o​z​y​c​j​i
			 */
			noBeverageFound: string
			/**
			 * t​o​ ​j​e​s​t​ ​n​a​j​n​o​w​s​z​y​ ​m​i​e​s​i​ą​c
			 */
			theNewestMonth: string
			/**
			 * t​o​ ​j​e​s​t​ ​n​a​j​s​t​a​r​s​z​y​ ​m​i​e​s​i​ą​c
			 */
			theOldestMonth: string
		}
		login: {
			/**
			 * E​-​m​a​i​l
			 */
			email: string
			/**
			 * W​y​m​a​g​a​n​y​ ​p​r​a​w​i​d​ł​o​w​y​ ​a​d​r​e​s​ ​e​-​m​a​i​l
			 */
			incorrectEmail: string
			/**
			 * Z​a​l​o​g​o​w​a​n​o​ ​p​o​p​r​a​w​n​i​e
			 */
			loggedIn: string
			/**
			 * H​a​s​ł​o
			 */
			password: string
			/**
			 * W​y​ś​l​i​j
			 */
			submit: string
			/**
			 * Z​a​l​o​g​u​j​ ​s​i​ę
			 */
			title: string
			/**
			 * N​i​e​ ​u​d​a​ł​o​ ​s​i​ę​ ​z​a​l​o​g​o​w​a​ć​.​ ​S​p​r​ó​b​u​j​ ​p​o​n​o​w​n​i​e​!
			 */
			tryAgain: string
		}
	}
}

export type TranslationFunctions = {
	about: {
		/**
		 * O stronie
		 */
		header: () => LocalizedString
	}
	breadcrumbs: {
		/**
		 * lista
		 */
		list: () => LocalizedString
	}
	forms: {
		validation: {
			/**
			 * Pole jest wymagane
			 */
			required: () => LocalizedString
		}
	}
	header: {
		/**
		 * Zamknij nawigację
		 */
		closeNavigation: () => LocalizedString
		/**
		 * Zamnij wyszukiwarkę
		 */
		closeSearchbar: () => LocalizedString
		/**
		 * Otwórz nawigację
		 */
		openNavigation: () => LocalizedString
		/**
		 * Otwórz wyszukiwarkę
		 */
		openSearchbar: () => LocalizedString
		/**
		 * Szukaj
		 */
		search: () => LocalizedString
	}
	/**
	 * {0}
	 */
	link: (arg0: unknown) => LocalizedString
	navigation: {
		/**
		 * O stronie
		 */
		about: () => LocalizedString
		/**
		 * Dodaj piwo
		 */
		addBeverage: () => LocalizedString
		/**
		 * Marki
		 */
		brands: () => LocalizedString
		/**
		 * Miejsca
		 */
		places: () => LocalizedString
		/**
		 * Statystyki
		 */
		stats: () => LocalizedString
	}
	pages: {
		home: {
			/**
			 * Baza piw, które wypiłem w przeciągu ostatnich lat
			 */
			description: () => LocalizedString
		}
		listing: {
			/**
			 * Nie znaleziono zdjęcia
			 */
			imageNotFound: () => LocalizedString
			/**
			 * Nie znaleziono żadnej pozycji
			 */
			noBeverageFound: () => LocalizedString
			/**
			 * to jest najnowszy miesiąc
			 */
			theNewestMonth: () => LocalizedString
			/**
			 * to jest najstarszy miesiąc
			 */
			theOldestMonth: () => LocalizedString
		}
		login: {
			/**
			 * E-mail
			 */
			email: () => LocalizedString
			/**
			 * Wymagany prawidłowy adres e-mail
			 */
			incorrectEmail: () => LocalizedString
			/**
			 * Zalogowano poprawnie
			 */
			loggedIn: () => LocalizedString
			/**
			 * Hasło
			 */
			password: () => LocalizedString
			/**
			 * Wyślij
			 */
			submit: () => LocalizedString
			/**
			 * Zaloguj się
			 */
			title: () => LocalizedString
			/**
			 * Nie udało się zalogować. Spróbuj ponownie!
			 */
			tryAgain: () => LocalizedString
		}
	}
}

export type Formatters = {}
