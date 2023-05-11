import { endOfMonth } from 'date-fns';
import { basics } from '$lib/db/mongo';
import normalizeApiData from '$lib/templates/BeverageList/normalizeApiData';
import getLatestMonth from '$lib/utils/api/list/getLatestMonth';

export const prerender = true;

export const load = async () => {
	const { month, year } = await getLatestMonth();

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
