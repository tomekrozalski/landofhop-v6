import type LanguageValue from '$lib/db/types/LanguageValue.d';
import {
	AlcoholRelate,
	AlcoholScope,
	AlcoholUnit,
	ContainerType,
	ExtractRelate,
	ExtractUnit,
	Fermentation
} from '$lib/db/enums/Beverage.enum';

export type RawLandingStats = {
	shortId: string;
	brand: {
		badge: string;
		shortId: string;
		name: LanguageValue;
	};
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
	ratings?: number;
	container: {
		type: ContainerType;
	};
	added: Date;
};
