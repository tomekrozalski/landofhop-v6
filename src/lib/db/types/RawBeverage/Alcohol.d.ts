import { AlcoholRelate, AlcoholScope, AlcoholUnit } from '$lib/db/enums/Beverage.enum';

type Alcohol = {
	relate: AlcoholRelate;
	unit: AlcoholUnit;
	value: number;
	scope?: AlcoholScope;
};

export default Alcohol;
