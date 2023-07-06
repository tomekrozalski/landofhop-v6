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
	breadcrumbs: {
		/**
		 * d​e​t​a​l​e
		 */
		details: string
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
	global: {
		/**
		 * o​r​a​z
		 */
		longConjunction: string
		/**
		 * i
		 */
		shortConjunction: string
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
		about: {
			/**
			 * O​ ​s​t​r​o​n​i​e
			 */
			header: string
		}
		details: {
			gallery: {
				cap: {
					/**
					 * s​c​h​o​w​a​j​ ​k​a​p​s​e​l
					 */
					hide: string
					/**
					 * p​o​k​a​ż​ ​k​a​p​s​e​l
					 */
					show: string
					/**
					 * {​n​a​m​e​}​,​ ​k​a​p​s​e​l
					 * @param {unknown} name
					 */
					title: RequiredParams<'name'>
				}
				/**
				 * N​i​e​ ​z​n​a​l​e​z​i​o​n​o​ ​z​d​j​ę​c​i​a
				 */
				imageNotFound: string
				viewFromAbove: {
					/**
					 * s​c​h​o​w​a​j​ ​w​i​d​o​k​ ​z​ ​g​ó​r​y
					 */
					hide: string
					/**
					 * p​o​k​a​ż​ ​w​i​d​o​k​ ​z​ ​g​ó​r​y
					 */
					show: string
					/**
					 * {​n​a​m​e​}​,​ ​w​i​d​o​k​ ​z​ ​g​ó​r​y
					 * @param {unknown} name
					 */
					title: RequiredParams<'name'>
				}
			}
			header: {
				/**
				 * U​w​a​r​z​o​n​o
				 */
				brewed: string
				/**
				 * p​r​z​e​z
				 */
				by: string
				/**
				 * d​l​a
				 */
				'for': string
				/**
				 * w​ ​k​o​o​p​e​r​a​c​j​i​ ​z
				 */
				inCooperationWith: string
				/**
				 * ,​ ​w​ ​s​e​r​i​i
				 */
				series: string
			}
			navigation: {
				/**
				 * N​a​s​t​ę​p​n​e​ ​p​i​w​o
				 */
				next: string
				/**
				 * P​o​p​r​z​e​d​n​i​e​ ​p​i​w​o
				 */
				previous: string
			}
			ratings: {
				/**
				 * s​c​h​o​w​a​j​ ​s​z​c​z​e​g​ó​ł​y
				 */
				hideDetails: string
				/**
				 * {​0​}​ ​{​{​g​ł​o​s​ó​w​|​g​ł​o​s​|​g​ł​o​s​y​|​g​ł​o​s​y​|​g​ł​o​s​ó​w​}​}
				 * @param {string | number | boolean} 0
				 */
				quantity: RequiredParams<'0'>
				/**
				 * p​o​k​a​ż​ ​s​z​c​z​e​g​ó​ł​y
				 */
				showDetails: string
				/**
				 * O​c​e​n​a​ ​s​p​o​ł​e​c​z​n​o​ś​c​i
				 */
				title: string
				/**
				 * o​s​t​a​t​n​i​a​ ​a​k​t​u​a​l​i​z​a​c​j​a​ ​{​0​}
				 * @param {unknown} 0
				 */
				updatedAt: RequiredParams<'0'>
			}
			tale: {
				/**
				 * z​w​i​ń
				 */
				readLess: string
				/**
				 * c​z​y​t​a​j​ ​w​i​ę​c​e​j
				 */
				readMore: string
			}
			testimony: {
				/**
				 * k​o​d​ ​k​r​e​s​k​o​w​y
				 */
				barcode: string
				/**
				 * m​i​e​j​s​c​o​w​o​ś​ć
				 */
				city: string
				/**
				 * k​r​a​j
				 */
				country: string
			}
		}
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
	breadcrumbs: {
		/**
		 * detale
		 */
		details: () => LocalizedString
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
	global: {
		/**
		 * oraz
		 */
		longConjunction: () => LocalizedString
		/**
		 * i
		 */
		shortConjunction: () => LocalizedString
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
		about: {
			/**
			 * O stronie
			 */
			header: () => LocalizedString
		}
		details: {
			gallery: {
				cap: {
					/**
					 * schowaj kapsel
					 */
					hide: () => LocalizedString
					/**
					 * pokaż kapsel
					 */
					show: () => LocalizedString
					/**
					 * {name}, kapsel
					 */
					title: (arg: { name: unknown }) => LocalizedString
				}
				/**
				 * Nie znaleziono zdjęcia
				 */
				imageNotFound: () => LocalizedString
				viewFromAbove: {
					/**
					 * schowaj widok z góry
					 */
					hide: () => LocalizedString
					/**
					 * pokaż widok z góry
					 */
					show: () => LocalizedString
					/**
					 * {name}, widok z góry
					 */
					title: (arg: { name: unknown }) => LocalizedString
				}
			}
			header: {
				/**
				 * Uwarzono
				 */
				brewed: () => LocalizedString
				/**
				 * przez
				 */
				by: () => LocalizedString
				/**
				 * dla
				 */
				'for': () => LocalizedString
				/**
				 * w kooperacji z
				 */
				inCooperationWith: () => LocalizedString
				/**
				 * , w serii
				 */
				series: () => LocalizedString
			}
			navigation: {
				/**
				 * Następne piwo
				 */
				next: () => LocalizedString
				/**
				 * Poprzednie piwo
				 */
				previous: () => LocalizedString
			}
			ratings: {
				/**
				 * schowaj szczegóły
				 */
				hideDetails: () => LocalizedString
				/**
				 * {0} {{głosów|głos|głosy|głosy|głosów}}
				 */
				quantity: (arg0: string | number | boolean) => LocalizedString
				/**
				 * pokaż szczegóły
				 */
				showDetails: () => LocalizedString
				/**
				 * Ocena społeczności
				 */
				title: () => LocalizedString
				/**
				 * ostatnia aktualizacja {0}
				 */
				updatedAt: (arg0: unknown) => LocalizedString
			}
			tale: {
				/**
				 * zwiń
				 */
				readLess: () => LocalizedString
				/**
				 * czytaj więcej
				 */
				readMore: () => LocalizedString
			}
			testimony: {
				/**
				 * kod kreskowy
				 */
				barcode: () => LocalizedString
				/**
				 * miejscowość
				 */
				city: () => LocalizedString
				/**
				 * kraj
				 */
				country: () => LocalizedString
			}
		}
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
