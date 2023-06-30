import { IngredientType } from '$lib/db/enums/Beverage.enum';
import type LanguageValue from '../LanguageValue.d';

type Ingredient = {
	badge: string;
	name: LanguageValue[];
	type: IngredientType;
};

export default Ingredient;
