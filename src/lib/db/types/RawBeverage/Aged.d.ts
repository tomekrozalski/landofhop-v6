import { AgedPreviousContent, AgedTimeUnit, AgedType, AgedWood } from '$lib/db/enums/Beverage.enum';

type Aged = {
	type?: AgedType;
	wood?: AgedWood;
	time?: {
		value: number;
		unit: AgedTimeUnit;
	};
	previousContent?: AgedPreviousContent[];
};

export default Aged;
