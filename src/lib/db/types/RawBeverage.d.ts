import { Clarity, Fermentation } from '../enums/Beverage.enum';
import type Aged from './RawBeverage/Aged.d';
import type Alcohol from './RawBeverage/Alcohol.d';
import type Container from './RawBeverage/Container.d';
import type ExpirationDate from './RawBeverage/ExpirationDate.d';
import type Extract from './RawBeverage/Extract.d';
import type HopRate from './RawBeverage/HopRate.d';
import type Ingredient from './RawBeverage/Ingredient.d';
import type Institution from './RawBeverage/Institution.d';
import type Place from './RawBeverage/Place.d';
import type Price from './RawBeverage/Price.d';
import type Tale from './RawBeverage/Tale.d';
import type Temperature from './RawBeverage/Temperature.d';
import type LanguageValue from './LanguageValue.d';

export type RawBeverage = {
	// _id: string;
	shortId: string;
	badge: string;
	// label
	label: {
		general: {
			name: LanguageValue[];
			series?: LanguageValue[];
			brand: Institution;
			cooperation?: Institution[];
			contract?: Institution;
			isContract?: boolean;
			place?: Place;
			remark?: LanguageValue[];
			tale?: Tale[];
			barcode?: string;
		};
		brewing?: {
			fermentation?: Fermentation[];
			extract?: Extract;
			alcohol?: Alcohol;
			filtration?: boolean;
			pasteurization?: boolean;
			aged?: Aged[];
			style?: LanguageValue[];
			isDryHopped?: boolean;
			dryHopped?: Ingredient[];
			hopRate?: HopRate;
			nitrogen?: boolean;
			expirationDate?: ExpirationDate;
		};
		ingredients?: {
			descriptive?: {
				complete: boolean;
				language: string;
				list: string[];
			}[];
			tags?: Ingredient[];
			smokedMalt?: boolean;
		};
		impressions?: {
			bitterness?: number;
			sweetness?: number;
			fullness?: number;
			power?: number;
			hoppyness?: number;
			temperature?: Temperature;
		};
		container: Container;
		price?: Price[];
	};
	// producer
	producer?: {
		general?: {
			series?: LanguageValue[];
			brand?: Institution;
			cooperation?: Institution[];
			contract?: Institution;
			isContract?: boolean;
			place?: Place;
			remark?: LanguageValue[];
			tale?: Tale[];
		};
		brewing?: {
			fermentation?: Fermentation[];
			extract?: Extract;
			alcohol?: Alcohol;
			filtration?: boolean;
			pasteurization?: boolean;
			aged?: Aged[];
			style?: LanguageValue[];
			isDryHopped?: boolean;
			dryHopped?: Ingredient[];
			hopRate?: HopRate;
			nitrogen?: boolean;
			expirationDate?: ExpirationDate;
		};
		ingredients?: {
			descriptive?: {
				complete: boolean;
				language: string;
				list: string[];
			}[];
			tags?: Ingredient[];
			smokedMalt?: boolean;
		};
		impressions?: {
			bitterness?: number;
			sweetness?: number;
			fullness?: number;
			power?: number;
			hoppyness?: number;
			temperature?: Temperature;
		};
		price?: Price[];
	};
	// editorial
	editorial?: {
		general?: {
			series?: LanguageValue[];
			cooperation?: Institution[];
			contract?: Institution;
			isContract?: boolean;
			place?: Place;
			remark?: LanguageValue[];
		};
		brewing?: {
			fermentation?: Fermentation[];
			styleTags?: {
				badge: string;
				name: LanguageValue[];
			}[];
			alcohol?: {
				scope: AlcoholScope;
			};
			filtration?: boolean;
			pasteurization?: boolean;
			aged?: Aged[];
			isDryHopped?: boolean;
			dryHopped?: Ingredient[];
			nitrogen?: boolean;
		};
		impressions?: {
			color?: string;
			clarity?: Clarity;
		};
		ratings?: {
			rateBeer: {
				beverageId: number;
				quantity?: number;
				value?: number;
				date?: Date;
			};
			untappd: {
				beverageSlug: string;
				quantity?: number;
				value?: number;
				date?: Date;
			};
			total?: {
				quantity: number;
				value: number;
				date?: Date;
			};
		};
		price?: Price[];
		photos?: {
			cap?: boolean;
			cover?: {
				height: number;
				width: number;
			};
			gallery?: number;
			outlines?: {
				cover?: string;
				gallery?: string;
			};
			viewFromAbove?: boolean;
		};
		notes?: string;
	};
	added: Date;
	updated?: Date;
};
