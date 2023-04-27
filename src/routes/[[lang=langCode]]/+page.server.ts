import { endOfMonth, getMonth, getYear } from 'date-fns';
import { basics } from '$lib/db/mongo';
import normalizeApiData from '$lib/templates/BeverageList/normalizeApiData';

export const prerender = true;

export const load = async () => {
	const lastBasics = await basics.find().sort({ added: -1 }).limit(1).toArray();
	const date = new Date(lastBasics[0].added);
	const month = getMonth(date) + 1;
	const year = getYear(date);

	const rawBasics = await basics
		.find({
			added: {
				$lt: endOfMonth(new Date(year, month - 1)),
				$gte: new Date(year, month - 1)
			}
		})
		.sort({ added: -1 })
		.toArray();

	const beverages = normalizeApiData(rawBasics);

	return {
		beverages,
		scope: {
			month,
			year
		}
	};
};
