import LanguageValue from '$lib/db/types/LanguageValue.d';
import {
	AgedPreviousContent,
	AgedTimeUnit,
	AgedType,
	AgedWood,
	AlcoholRelate,
	AlcoholScope,
	AlcoholUnit,
	Clarity,
	ContainerColor,
	ContainerMaterial,
	ContainerType,
	ContainerUnit,
	Currency,
	ExpirationDateUnit,
	ExtractRelate,
	ExtractUnit,
	Fermentation,
	HopRateUnit,
	IngredientType,
	TemperatureUnit
} from '$lib/db/enums/Beverage.enum';

export type Institution = {
	badge: string;
	name: LanguageValue;
	shortId: string;
	owner?: {
		badge: string;
		name: LanguageValue;
		shortId: string;
	};
};

export type Details = {
	shortId: string;
	badge: string;
	name: LanguageValue;
	series?: {
		label?: LanguageValue[];
		producer?: LanguageValue[];
		editorial?: LanguageValue[];
	};
	brand: Institution;
	cooperation?: {
		label?: Institution[];
		producer?: Institution[];
		editorial?: Institution[];
	};
	contract?: {
		label?: Institution;
		producer?: Institution;
		editorial?: Institution;
	};
	isContract?: {
		label?: boolean;
		producer?: boolean;
		editorial?: boolean;
	};
	place?: {
		label?: {
			city: LanguageValue;
			country: string;
		};
		producer?: {
			city: LanguageValue;
			country: string;
		};
		editorial?: {
			city: LanguageValue;
			country: string;
		};
	};
	remark?: {
		label?: LanguageValue;
		producer?: LanguageValue;
		editorial?: LanguageValue;
	};
	tale?: {
		label?: {
			article?: string;
			language: string;
			lead: string;
		}[];
		producer?: {
			article?: string;
			language: string;
			lead: string;
		};
	};
	barcode?: string;
	fermentation?: {
		label?: Fermentation[];
		producer?: Fermentation[];
		editorial?: Fermentation[];
	};
	extract?: {
		label?: {
			relate: ExtractRelate;
			unit: ExtractUnit;
			value: number;
		};
		producer?: {
			relate: ExtractRelate;
			unit: ExtractUnit;
			value: number;
		};
	};
	alcohol?: {
		label?: {
			relate: AlcoholRelate;
			unit: AlcoholUnit;
			value: number;
			scope?: AlcoholScope;
		};
		producer?: {
			relate: AlcoholRelate;
			unit: AlcoholUnit;
			value: number;
			scope?: AlcoholScope;
		};
		editorial?: {
			scope: AlcoholScope;
		};
	};
	filtration?: {
		label?: boolean;
		producer?: boolean;
		editorial?: boolean;
	};
	pasteurization?: {
		label?: boolean;
		producer?: boolean;
		editorial?: boolean;
	};
	isAged?: {
		label?: boolean;
		producer?: boolean;
		editorial?: boolean;
	};
	aged?: {
		label?: {
			previousContent?: AgedPreviousContent[];
			time?: {
				value: number;
				unit: AgedTimeUnit;
			};
			type?: AgedType;
			wood?: AgedWood;
		}[];
		producer?: {
			previousContent?: AgedPreviousContent[];
			time?: {
				value: number;
				unit: AgedTimeUnit;
			};
			type?: AgedType;
			wood?: AgedWood;
		}[];
		editorial?: {
			previousContent?: AgedPreviousContent[];
			time?: {
				value: number;
				unit: AgedTimeUnit;
			};
			type?: AgedType;
			wood?: AgedWood;
		}[];
	};
	style?: {
		label?: LanguageValue[];
		producer?: LanguageValue[];
	};
	styleTags?: {
		editorial: {
			badge: string;
			name: LanguageValue;
		}[];
	};
	isDryHopped?: {
		label?: boolean;
		producer?: boolean;
		editorial?: boolean;
	};
	dryHopped?: {
		label?: {
			badge: string;
			name: LanguageValue;
			type: IngredientType;
		}[];
		producer?: {
			badge: string;
			name: LanguageValue;
			type: IngredientType;
		}[];
		editorial?: {
			badge: string;
			name: LanguageValue;
			type: IngredientType;
		}[];
	};
	hopRate?: {
		label?: {
			unit: HopRateUnit;
			value: number;
		};
		producer?: {
			unit: HopRateUnit;
			value: number;
		};
	};
	nitrogen?: {
		label?: boolean;
		producer?: boolean;
		editorial?: boolean;
	};
	expirationDate?: {
		label?: {
			value: number;
			unit: ExpirationDateUnit;
		};
		producer?: {
			value: number;
			unit: ExpirationDateUnit;
		};
	};
	ingredients?: {
		label?: {
			complete: boolean;
			language: string;
			list: string[];
		};
		producer?: {
			complete: boolean;
			language: string;
			list: string[];
		};
	};
	ingredientsTags?: {
		label?: {
			badge: string;
			name: LanguageValue;
			type: IngredientType;
		}[];
		producer?: {
			badge: string;
			name: LanguageValue;
			type: IngredientType;
		}[];
	};
	smokedMalt?: {
		label?: boolean;
		producer?: boolean;
	};
	bitterness?: {
		label?: number;
		producer?: number;
	};
	sweetness?: {
		label?: number;
		producer?: number;
	};
	fullness?: {
		label?: number;
		producer?: number;
	};
	power?: {
		label?: number;
		producer?: number;
	};
	hoppyness?: {
		label?: number;
		producer?: number;
	};
	temperature?: {
		label?: {
			from: number;
			to: number;
			unit: TemperatureUnit;
		};
		producer?: {
			from: number;
			to: number;
			unit: TemperatureUnit;
		};
	};
	color?: {
		editorial?: string;
	};
	clarity?: {
		editorial?: Clarity;
	};
	ratings?: {
		rateBeer?: {
			quantity: number;
			value: number;
		};
		untappd?: {
			quantity: number;
			value: number;
		};
		total?: {
			quantity: number;
			value: number;
			date?: string;
		};
	};
	container: {
		color: ContainerColor;
		hasCapWireFlip?: boolean;
		hasCork?: boolean;
		material: ContainerMaterial;
		type: ContainerType;
		unit: ContainerUnit;
		value: number;
	};
	price?: {
		label?: {
			currency: Currency;
			date: Date;
			shop?: string;
			value: number;
		}[];
		producer?: {
			currency: Currency;
			date: Date;
			shop?: string;
			value: number;
		}[];
		editorial?: {
			currency: Currency;
			date: Date;
			shop?: string;
			value: number;
		}[];
	};
	photos?: {
		cap?: boolean;
		gallery?: number;
		outline?: string;
		viewFromAbove?: boolean;
	};
	added: string;
	updated?: string;
};
