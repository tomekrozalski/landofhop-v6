import { IngredientType } from '$lib/db/enums/Beverage.enum';

export type Navigation = {
	badge: IngredientType;
	isActive?: boolean;
	occurrences: number;
}[];

type IngredientTree = {
	badge: string;
	name: LanguageValue;
	occurrences: {
		alone: number;
		withSuccessors: number;
	};
	successors?: IngredientTree[];
	successorsList?: string[];
};

export type IngredientsStats = {
	navigation: IngredientsStatsNavigation;
	tree: IngredientTree;
};
