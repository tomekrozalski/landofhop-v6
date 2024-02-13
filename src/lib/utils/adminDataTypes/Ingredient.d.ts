import type { IngredientType } from '$lib/db/enums/Beverage.enum';
import type { LanguageValue } from '$lib/db/types/LanguageValue.d';

export type Ingredient = {
	badge: string;
	name: LanguageValue[];
	occurrences: {
		alone: number;
		withSuccessors: number;
	};
	parent?: string;
	type: IngredientType;
};
