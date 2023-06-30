import { Currency } from '$lib/db/enums/Beverage.enum';

type Price = {
	currency: Currency;
	date: Date;
	shop?: string;
	value: number;
};

export default Price;
