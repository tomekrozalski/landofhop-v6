import { endOfMonth } from 'date-fns';
import { basics } from '$lib/db/mongo';
import normalizeApiData from '$lib/templates/BeverageList/normalizeApiData';
import getLatestMonth from '$lib/utils/api/list/getLatestMonth';

// export const config = {
// 	isr: { expiration: 60 }
// };

export const load = async () => {
	const { month, year } = await getLatestMonth();
	const currentDate = new Date(year, month - 1);

	const rawBasics = await basics
		.find({
			added: {
				$lt: endOfMonth(currentDate),
				$gte: currentDate
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
