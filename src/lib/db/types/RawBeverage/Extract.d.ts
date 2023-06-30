import { ExtractRelate, ExtractUnit } from '$lib/db/enums/Beverage.enum';

type Extract = {
	relate: ExtractRelate;
	unit: ExtractUnit;
	value: number;
};

export default Extract;
