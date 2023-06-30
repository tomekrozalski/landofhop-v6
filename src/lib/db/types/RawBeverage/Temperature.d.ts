import { TemperatureUnit } from '$lib/db/enums/Beverage.enum';

type Temperature = {
	from: number;
	to: number;
	unit: TemperatureUnit;
};

export default Temperature;
