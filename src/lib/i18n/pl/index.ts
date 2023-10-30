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
		foundCount: 'znaleziono',
		longConjunction: 'oraz',
		shortConjunction: 'i'
	},
	header: {
		advancedSearchLink: 'wyszukiwanie zaawansowane',
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
			header: 'O stronie',
			body: '**Land of Hop** to katalog piw, które wypiłem od października 2017. Tylko tylko i aż tyle 🙂 Nie myślę o niej jako o konkurencji dla RateBeer, ani w ogóle nie mam w stosunku do niej oczekiwań biznesowych. Piszę ją, by ćwiczyć programowanie. Przez dłuższy czas był to React, Gatsby, Next, Fastify, Nest itd., a aktualnie Svelte, SvelteKit, TypeScript, Tailwind, AWS S3, MongoDB. Więcej na ten temat na [stronie repozytorium na portalu GitHub](https://github.com/tomekrozalski/landofhop-v6).',
			title: 'O stronie'
		},
		details: {
			adminBar: {
				areYouSure: 'Na pewno usunąć?',
				notes: 'notatki',
				lastTimeUpdated: 'ostatnio poprawiono',
				removeBeverage: 'Usuń piwo',
				updateContent: 'Popraw informacje',
				updateImages: 'Popraw zdjęcia',
				updateRating: 'Uaktualnij oceny'
			},
			footNotes: {
				added: 'dodano'
			},
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
			impressions: {
				bitterness: 'gorycz',
				clarity: {
					title: 'klarowność',
					clear: 'czyste',
					crystalline: 'krystaliczne',
					hazy: 'hazy',
					misty: 'zamglone',
					muddy: 'błotniste',
					opalescent: 'opalizujące'
				},
				color: 'kolor',
				fullness: 'pełnia',
				hoppyness: 'chmielowość',
				power: 'moc',
				sweetness: 'słodycz'
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
				aged: {
					title: 'leżakowanie',
					barrel: {
						title: 'w beczce',
						beech: 'w beczce bukowej',
						oak: 'w beczce dębowej'
					},
					beech: 'buk',
					flow: 'Sposób leżakowania {order}',
					oak: 'dąb',
					previousContent: {
						title: 'Poprzednia zawartość w którym drewno miało kontakt',
						bourbon: 'bourbon',
						cognac: 'koniak',
						content:
							'{item|{bourbon: bourbonie, cognac: koniaku, porto: porto, redWine: czerwonym winie, rum: rumie, whisky: whisky}}',
						name: 'po',
						porto: 'porto',
						redWine: 'czerwone wino',
						rum: 'rum',
						whisky: 'whisky'
					},
					timeOfAged: 'Czas leżakowania',
					wood: {
						title: 'z drewnem',
						beech: 'z drewnem bukowym',
						oak: 'z drewnem dębowym'
					}
				},
				alcohol: 'alkohol',
				alcoholScope: {
					m500: '<0.5%',
					pm500: '±0.5%',
					pm1000: '±1.0%'
				},
				alcoholValue: '{value}{unit|{degree: °, percent: %}} {relate|{capacity: obj., abv: Abv}}',
				barcode: 'kod kreskowy',
				city: 'miejscowość',
				container: {
					title: 'opakowanie',
					color: {
						brown: 'brązowa',
						golden: 'złota',
						green: 'zielona',
						black: 'czarna',
						silver: 'srebrna',
						transparent: 'przezroczysta'
					},
					material: {
						glass: 'szklana',
						aluminum: 'aluminiowa'
					},
					type: {
						bottle: 'butelka',
						can: 'puszka'
					},
					unit: {
						ml: 'ml'
					},
					value: '{value} {unit|{ml: ml}}'
				},
				contains: 'zawiera',
				country: 'kraj',
				dryHopped: 'chmielone na zimno',
				expirationTime: 'termin ważności do spożycia',
				extract: 'ekstrakt',
				extractValue:
					'{value}{unit|{degree: °, percent: %}} {relate|{weight: wag., blg: Blg, plato: Plato}}',
				fermentation: 'fermentacja',
				fermentationType: {
					bottom: 'dolna',
					spontaneous: 'spontaniczna',
					top: 'górna'
				},
				filtration: 'filtracja',
				ingredients: 'składniki',
				ingredientsByTag: 'składniki wedle tagów',
				hopRate: 'hop rate',
				hopRateValue: '{value} {unit|{gl: g/L}}',
				nitrogen: 'nasycane azotem',
				pasteurization: 'pasteryzacja',
				price: 'cena',
				smokedMalt: 'zawiera słód wędzony',
				style: 'styl',
				styleTags: 'styl w grupie',
				temperature: 'temperatura podawania',
				temperatureUnit: '{0|{celcius: °C}}'
			}
		},
		home: {
			description: 'Baza piw, które wypiłem w przeciągu ostatnich lat',
			title: 'Land of Hop'
		},
		listing: {
			imageNotFound: 'Nie znaleziono zdjęcia',
			noBeverageFound: 'Nie znaleziono żadnej pozycji',
			theNewestMonth: 'to jest najnowszy miesiąc',
			theOldestMonth: 'to jest najstarszy miesiąc',
			title: 'Lista piw na {month}'
		},
		login: {
			email: 'E-mail',
			incorrectEmail: 'Wymagany prawidłowy adres e-mail',
			loggedIn: 'Zalogowano poprawnie',
			password: 'Hasło',
			submit: 'Wyślij',
			title: 'Zaloguj się',
			tryAgain: 'Nie udało się zalogować. Spróbuj ponownie!'
		},
		search: {
			pagination: {
				nextPage: 'następna strona',
				page: 'strona z wynikami',
				previousPage: 'poprzednia strona'
			}
		}
	},
	time: {
		day: '{0} {{dni|dzień|dni|dni|dni}}',
		month: '{0} {{miesięcy|miesiąc|miesiące|miesiące|miesięcy}}',
		year: '{0} {{lat|rok|lata|lata|lat}}'
	}
} satisfies BaseTranslation;

export default pl;
