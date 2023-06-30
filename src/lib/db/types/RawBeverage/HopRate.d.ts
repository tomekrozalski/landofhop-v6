import { HopRateUnit } from '$lib/db/enums/Beverage.enum';

type HopRate = {
	unit: HopRateUnit;
	value: number;
};

export default HopRate;
