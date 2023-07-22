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
		 * t​a​k
		 */
		confirmation: string
		/**
		 * n​i​e
		 */
		denial: string
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
			impressions: {
				/**
				 * g​o​r​y​c​z
				 */
				bitterness: string
				clarity: {
					/**
					 * k​l​a​r​o​w​n​o​ś​ć
					 */
					title: string
					/**
					 * c​z​y​s​t​e
					 */
					clear: string
					/**
					 * k​r​y​s​t​a​l​i​c​z​n​e
					 */
					crystalline: string
					/**
					 * h​a​z​y
					 */
					hazy: string
					/**
					 * z​a​m​g​l​o​n​e
					 */
					misty: string
					/**
					 * b​ł​o​t​n​i​s​t​e
					 */
					muddy: string
					/**
					 * o​p​a​l​i​z​u​j​ą​c​e
					 */
					opalescent: string
				}
				/**
				 * k​o​l​o​r
				 */
				color: string
				/**
				 * p​e​ł​n​i​a
				 */
				fullness: string
				/**
				 * c​h​m​i​e​l​o​w​o​ś​ć
				 */
				hoppyness: string
				/**
				 * m​o​c
				 */
				power: string
				/**
				 * s​ł​o​d​y​c​z
				 */
				sweetness: string
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
				aged: {
					/**
					 * l​e​ż​a​k​o​w​a​n​i​e
					 */
					title: string
					barrel: {
						/**
						 * w​ ​b​e​c​z​c​e
						 */
						title: string
						/**
						 * w​ ​b​e​c​z​c​e​ ​b​u​k​o​w​e​j
						 */
						beech: string
						/**
						 * w​ ​b​e​c​z​c​e​ ​d​ę​b​o​w​e​j
						 */
						oak: string
					}
					/**
					 * b​u​k
					 */
					beech: string
					/**
					 * S​p​o​s​ó​b​ ​l​e​ż​a​k​o​w​a​n​i​a​ ​{​o​r​d​e​r​}
					 * @param {unknown} order
					 */
					flow: RequiredParams<'order'>
					/**
					 * d​ą​b
					 */
					oak: string
					previousContent: {
						/**
						 * P​o​p​r​z​e​d​n​i​a​ ​z​a​w​a​r​t​o​ś​ć​ ​w​ ​k​t​ó​r​y​m​ ​d​r​e​w​n​o​ ​m​i​a​ł​o​ ​k​o​n​t​a​k​t
						 */
						title: string
						/**
						 * b​o​u​r​b​o​n
						 */
						bourbon: string
						/**
						 * k​o​n​i​a​k
						 */
						cognac: string
						/**
						 * {​i​t​e​m​|​{​b​o​u​r​b​o​n​:​ ​b​o​u​r​b​o​n​i​e​,​ ​c​o​g​n​a​c​:​ ​k​o​n​i​a​k​u​,​ ​p​o​r​t​o​:​ ​p​o​r​t​o​,​ ​r​e​d​W​i​n​e​:​ ​c​z​e​r​w​o​n​y​m​ ​w​i​n​i​e​,​ ​r​u​m​:​ ​r​u​m​i​e​,​ ​w​h​i​s​k​y​:​ ​w​h​i​s​k​y​}​}
						 * @param {'bourbon' | 'cognac' | 'porto' | 'redWine' | 'rum' | 'whisky'} item
						 */
						content: RequiredParams<`item|{bourbon:${string}, cognac:${string}, porto:${string}, redWine:${string}, rum:${string}, whisky:${string}}`>
						/**
						 * p​o
						 */
						name: string
						/**
						 * p​o​r​t​o
						 */
						porto: string
						/**
						 * c​z​e​r​w​o​n​e​ ​w​i​n​o
						 */
						redWine: string
						/**
						 * r​u​m
						 */
						rum: string
						/**
						 * w​h​i​s​k​y
						 */
						whisky: string
					}
					/**
					 * C​z​a​s​ ​l​e​ż​a​k​o​w​a​n​i​a
					 */
					timeOfAged: string
					wood: {
						/**
						 * z​ ​d​r​e​w​n​e​m
						 */
						title: string
						/**
						 * z​ ​d​r​e​w​n​e​m​ ​b​u​k​o​w​y​m
						 */
						beech: string
						/**
						 * z​ ​d​r​e​w​n​e​m​ ​d​ę​b​o​w​y​m
						 */
						oak: string
					}
				}
				/**
				 * a​l​k​o​h​o​l
				 */
				alcohol: string
				alcoholScope: {
					/**
					 * <​0​.​5​%
					 */
					m500: string
					/**
					 * ±​0​.​5​%
					 */
					pm500: string
					/**
					 * ±​1​.​0​%
					 */
					pm1000: string
				}
				/**
				 * {​v​a​l​u​e​}​{​u​n​i​t​|​{​d​e​g​r​e​e​:​ ​°​,​ ​p​e​r​c​e​n​t​:​ ​%​}​}​ ​{​r​e​l​a​t​e​|​{​c​a​p​a​c​i​t​y​:​ ​o​b​j​.​,​ ​a​b​v​:​ ​A​b​v​}​}
				 * @param {'capacity' | 'abv'} relate
				 * @param {'degree' | 'percent'} unit
				 * @param {unknown} value
				 */
				alcoholValue: RequiredParams<`relate|{capacity:${string}, abv:${string}}` | `unit|{degree:${string}, percent:${string}}` | 'value'>
				/**
				 * k​o​d​ ​k​r​e​s​k​o​w​y
				 */
				barcode: string
				/**
				 * m​i​e​j​s​c​o​w​o​ś​ć
				 */
				city: string
				container: {
					/**
					 * o​p​a​k​o​w​a​n​i​e
					 */
					title: string
					color: {
						/**
						 * b​r​ą​z​o​w​a
						 */
						brown: string
						/**
						 * z​ł​o​t​a
						 */
						golden: string
						/**
						 * z​i​e​l​o​n​a
						 */
						green: string
						/**
						 * c​z​a​r​n​a
						 */
						black: string
						/**
						 * s​r​e​b​r​n​a
						 */
						silver: string
						/**
						 * p​r​z​e​z​r​o​c​z​y​s​t​a
						 */
						transparent: string
					}
					material: {
						/**
						 * s​z​k​l​a​n​a
						 */
						glass: string
						/**
						 * a​l​u​m​i​n​i​o​w​a
						 */
						aluminum: string
					}
					type: {
						/**
						 * b​u​t​e​l​k​a
						 */
						bottle: string
						/**
						 * p​u​s​z​k​a
						 */
						can: string
					}
					unit: {
						/**
						 * m​l
						 */
						ml: string
					}
					/**
					 * {​v​a​l​u​e​}​ ​{​u​n​i​t​|​{​m​l​:​ ​m​l​}​}
					 * @param {'ml'} unit
					 * @param {unknown} value
					 */
					value: RequiredParams<`unit|{ml:${string}}` | 'value'>
				}
				/**
				 * z​a​w​i​e​r​a
				 */
				contains: string
				/**
				 * k​r​a​j
				 */
				country: string
				/**
				 * c​h​m​i​e​l​o​n​e​ ​n​a​ ​z​i​m​n​o
				 */
				dryHopped: string
				/**
				 * t​e​r​m​i​n​ ​w​a​ż​n​o​ś​c​i​ ​d​o​ ​s​p​o​ż​y​c​i​a
				 */
				expirationTime: string
				/**
				 * e​k​s​t​r​a​k​t
				 */
				extract: string
				/**
				 * {​v​a​l​u​e​}​{​u​n​i​t​|​{​d​e​g​r​e​e​:​ ​°​,​ ​p​e​r​c​e​n​t​:​ ​%​}​}​ ​{​r​e​l​a​t​e​|​{​w​e​i​g​h​t​:​ ​w​a​g​.​,​ ​b​l​g​:​ ​B​l​g​,​ ​p​l​a​t​o​:​ ​P​l​a​t​o​}​}
				 * @param {'weight' | 'blg' | 'plato'} relate
				 * @param {'degree' | 'percent'} unit
				 * @param {unknown} value
				 */
				extractValue: RequiredParams<`relate|{weight:${string}, blg:${string}, plato:${string}}` | `unit|{degree:${string}, percent:${string}}` | 'value'>
				/**
				 * f​e​r​m​e​n​t​a​c​j​a
				 */
				fermentation: string
				fermentationType: {
					/**
					 * d​o​l​n​a
					 */
					bottom: string
					/**
					 * s​p​o​n​t​a​n​i​c​z​n​a
					 */
					spontaneous: string
					/**
					 * g​ó​r​n​a
					 */
					top: string
				}
				/**
				 * f​i​l​t​r​a​c​j​a
				 */
				filtration: string
				/**
				 * s​k​ł​a​d​n​i​k​i
				 */
				ingredients: string
				/**
				 * s​k​ł​a​d​n​i​k​i​ ​w​e​d​l​e​ ​t​a​g​ó​w
				 */
				ingredientsByTag: string
				/**
				 * h​o​p​ ​r​a​t​e
				 */
				hopRate: string
				/**
				 * {​v​a​l​u​e​}​ ​{​u​n​i​t​|​{​g​l​:​ ​g​/​L​}​}
				 * @param {'gl'} unit
				 * @param {unknown} value
				 */
				hopRateValue: RequiredParams<`unit|{gl:${string}}` | 'value'>
				/**
				 * n​a​s​y​c​a​n​e​ ​a​z​o​t​e​m
				 */
				nitrogen: string
				/**
				 * p​a​s​t​e​r​y​z​a​c​j​a
				 */
				pasteurization: string
				/**
				 * c​e​n​a
				 */
				price: string
				/**
				 * z​a​w​i​e​r​a​ ​s​ł​ó​d​ ​w​ę​d​z​o​n​y
				 */
				smokedMalt: string
				/**
				 * s​t​y​l
				 */
				style: string
				/**
				 * s​t​y​l​ ​w​ ​g​r​u​p​i​e
				 */
				styleTags: string
				/**
				 * t​e​m​p​e​r​a​t​u​r​a​ ​p​o​d​a​w​a​n​i​a
				 */
				temperature: string
				/**
				 * {​0​|​{​c​e​l​c​i​u​s​:​ ​°​C​}​}
				 * @param {'celcius'} 0
				 */
				temperatureUnit: RequiredParams<`0|{celcius:${string}}`>
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
	time: {
		/**
		 * {​0​}​ ​{​{​d​n​i​|​d​z​i​e​ń​|​d​n​i​|​d​n​i​|​d​n​i​}​}
		 * @param {string | number | boolean} 0
		 */
		day: RequiredParams<'0'>
		/**
		 * {​0​}​ ​{​{​m​i​e​s​i​ę​c​y​|​m​i​e​s​i​ą​c​|​m​i​e​s​i​ą​c​e​|​m​i​e​s​i​ą​c​e​|​m​i​e​s​i​ę​c​y​}​}
		 * @param {string | number | boolean} 0
		 */
		month: RequiredParams<'0'>
		/**
		 * {​0​}​ ​{​{​l​a​t​|​r​o​k​|​l​a​t​a​|​l​a​t​a​|​l​a​t​}​}
		 * @param {string | number | boolean} 0
		 */
		year: RequiredParams<'0'>
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
		 * tak
		 */
		confirmation: () => LocalizedString
		/**
		 * nie
		 */
		denial: () => LocalizedString
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
			impressions: {
				/**
				 * gorycz
				 */
				bitterness: () => LocalizedString
				clarity: {
					/**
					 * klarowność
					 */
					title: () => LocalizedString
					/**
					 * czyste
					 */
					clear: () => LocalizedString
					/**
					 * krystaliczne
					 */
					crystalline: () => LocalizedString
					/**
					 * hazy
					 */
					hazy: () => LocalizedString
					/**
					 * zamglone
					 */
					misty: () => LocalizedString
					/**
					 * błotniste
					 */
					muddy: () => LocalizedString
					/**
					 * opalizujące
					 */
					opalescent: () => LocalizedString
				}
				/**
				 * kolor
				 */
				color: () => LocalizedString
				/**
				 * pełnia
				 */
				fullness: () => LocalizedString
				/**
				 * chmielowość
				 */
				hoppyness: () => LocalizedString
				/**
				 * moc
				 */
				power: () => LocalizedString
				/**
				 * słodycz
				 */
				sweetness: () => LocalizedString
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
				aged: {
					/**
					 * leżakowanie
					 */
					title: () => LocalizedString
					barrel: {
						/**
						 * w beczce
						 */
						title: () => LocalizedString
						/**
						 * w beczce bukowej
						 */
						beech: () => LocalizedString
						/**
						 * w beczce dębowej
						 */
						oak: () => LocalizedString
					}
					/**
					 * buk
					 */
					beech: () => LocalizedString
					/**
					 * Sposób leżakowania {order}
					 */
					flow: (arg: { order: unknown }) => LocalizedString
					/**
					 * dąb
					 */
					oak: () => LocalizedString
					previousContent: {
						/**
						 * Poprzednia zawartość w którym drewno miało kontakt
						 */
						title: () => LocalizedString
						/**
						 * bourbon
						 */
						bourbon: () => LocalizedString
						/**
						 * koniak
						 */
						cognac: () => LocalizedString
						/**
						 * {item|{bourbon: bourbonie, cognac: koniaku, porto: porto, redWine: czerwonym winie, rum: rumie, whisky: whisky}}
						 */
						content: (arg: { item: 'bourbon' | 'cognac' | 'porto' | 'redWine' | 'rum' | 'whisky' }) => LocalizedString
						/**
						 * po
						 */
						name: () => LocalizedString
						/**
						 * porto
						 */
						porto: () => LocalizedString
						/**
						 * czerwone wino
						 */
						redWine: () => LocalizedString
						/**
						 * rum
						 */
						rum: () => LocalizedString
						/**
						 * whisky
						 */
						whisky: () => LocalizedString
					}
					/**
					 * Czas leżakowania
					 */
					timeOfAged: () => LocalizedString
					wood: {
						/**
						 * z drewnem
						 */
						title: () => LocalizedString
						/**
						 * z drewnem bukowym
						 */
						beech: () => LocalizedString
						/**
						 * z drewnem dębowym
						 */
						oak: () => LocalizedString
					}
				}
				/**
				 * alkohol
				 */
				alcohol: () => LocalizedString
				alcoholScope: {
					/**
					 * <0.5%
					 */
					m500: () => LocalizedString
					/**
					 * ±0.5%
					 */
					pm500: () => LocalizedString
					/**
					 * ±1.0%
					 */
					pm1000: () => LocalizedString
				}
				/**
				 * {value}{unit|{degree: °, percent: %}} {relate|{capacity: obj., abv: Abv}}
				 */
				alcoholValue: (arg: { relate: 'capacity' | 'abv', unit: 'degree' | 'percent', value: unknown }) => LocalizedString
				/**
				 * kod kreskowy
				 */
				barcode: () => LocalizedString
				/**
				 * miejscowość
				 */
				city: () => LocalizedString
				container: {
					/**
					 * opakowanie
					 */
					title: () => LocalizedString
					color: {
						/**
						 * brązowa
						 */
						brown: () => LocalizedString
						/**
						 * złota
						 */
						golden: () => LocalizedString
						/**
						 * zielona
						 */
						green: () => LocalizedString
						/**
						 * czarna
						 */
						black: () => LocalizedString
						/**
						 * srebrna
						 */
						silver: () => LocalizedString
						/**
						 * przezroczysta
						 */
						transparent: () => LocalizedString
					}
					material: {
						/**
						 * szklana
						 */
						glass: () => LocalizedString
						/**
						 * aluminiowa
						 */
						aluminum: () => LocalizedString
					}
					type: {
						/**
						 * butelka
						 */
						bottle: () => LocalizedString
						/**
						 * puszka
						 */
						can: () => LocalizedString
					}
					unit: {
						/**
						 * ml
						 */
						ml: () => LocalizedString
					}
					/**
					 * {value} {unit|{ml: ml}}
					 */
					value: (arg: { unit: 'ml', value: unknown }) => LocalizedString
				}
				/**
				 * zawiera
				 */
				contains: () => LocalizedString
				/**
				 * kraj
				 */
				country: () => LocalizedString
				/**
				 * chmielone na zimno
				 */
				dryHopped: () => LocalizedString
				/**
				 * termin ważności do spożycia
				 */
				expirationTime: () => LocalizedString
				/**
				 * ekstrakt
				 */
				extract: () => LocalizedString
				/**
				 * {value}{unit|{degree: °, percent: %}} {relate|{weight: wag., blg: Blg, plato: Plato}}
				 */
				extractValue: (arg: { relate: 'weight' | 'blg' | 'plato', unit: 'degree' | 'percent', value: unknown }) => LocalizedString
				/**
				 * fermentacja
				 */
				fermentation: () => LocalizedString
				fermentationType: {
					/**
					 * dolna
					 */
					bottom: () => LocalizedString
					/**
					 * spontaniczna
					 */
					spontaneous: () => LocalizedString
					/**
					 * górna
					 */
					top: () => LocalizedString
				}
				/**
				 * filtracja
				 */
				filtration: () => LocalizedString
				/**
				 * składniki
				 */
				ingredients: () => LocalizedString
				/**
				 * składniki wedle tagów
				 */
				ingredientsByTag: () => LocalizedString
				/**
				 * hop rate
				 */
				hopRate: () => LocalizedString
				/**
				 * {value} {unit|{gl: g/L}}
				 */
				hopRateValue: (arg: { unit: 'gl', value: unknown }) => LocalizedString
				/**
				 * nasycane azotem
				 */
				nitrogen: () => LocalizedString
				/**
				 * pasteryzacja
				 */
				pasteurization: () => LocalizedString
				/**
				 * cena
				 */
				price: () => LocalizedString
				/**
				 * zawiera słód wędzony
				 */
				smokedMalt: () => LocalizedString
				/**
				 * styl
				 */
				style: () => LocalizedString
				/**
				 * styl w grupie
				 */
				styleTags: () => LocalizedString
				/**
				 * temperatura podawania
				 */
				temperature: () => LocalizedString
				/**
				 * {0|{celcius: °C}}
				 */
				temperatureUnit: (arg0: 'celcius') => LocalizedString
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
	time: {
		/**
		 * {0} {{dni|dzień|dni|dni|dni}}
		 */
		day: (arg0: string | number | boolean) => LocalizedString
		/**
		 * {0} {{miesięcy|miesiąc|miesiące|miesiące|miesięcy}}
		 */
		month: (arg0: string | number | boolean) => LocalizedString
		/**
		 * {0} {{lat|rok|lata|lata|lat}}
		 */
		year: (arg0: string | number | boolean) => LocalizedString
	}
}

export type Formatters = {}
