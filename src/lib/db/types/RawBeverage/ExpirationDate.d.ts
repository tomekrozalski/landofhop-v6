import { ExpirationDateUnit } from '$lib/db/enums/Beverage.enum';

type ExpirationDate = {
	value: number;
	unit: ExpirationDateUnit;
};

export default ExpirationDate;
