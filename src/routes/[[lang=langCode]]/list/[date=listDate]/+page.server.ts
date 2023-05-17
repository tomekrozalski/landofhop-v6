import { differenceInMonths, endOfMonth, isAfter, isBefore } from 'date-fns';
import { error } from '@sveltejs/kit';
import { basics } from '$lib/db/mongo';
import getLatestMonth from '$lib/utils/api/list/getLatestMonth';
import { OLDEST_LIST } from '$lib/utils/constants';
import normalizeApiData from '$lib/templates/BeverageList/normalizeApiData';

export const prerender = true;

export const load = async ({ params }) => {
	const latestMonth = await getLatestMonth();

	const [year, month] = params.date.split('-').map((elem) => +elem);
	const date = new Date(year, month - 1);

	if (month < 1 || month > 12) {
		throw error(404, { message: 'Wrong date format' });
	}

	if (
		isAfter(date, new Date(latestMonth.year, latestMonth.month - 2)) ||
		isBefore(date, new Date(2017, 5))
	) {
		throw error(404, { message: 'Date our of scope' });
	}

	const rawBasics = await basics
		.find({
			added: {
				$lt: endOfMonth(date),
				$gte: date
			}
		})
		.sort({ added: -1 })
		.toArray();

	const beverages = normalizeApiData(rawBasics);
	const latestMonthDate = new Date(latestMonth.year, latestMonth.month);
	const nextMonth = new Date(year, month);
	const isOneBeforeMostRecent = differenceInMonths(latestMonthDate, nextMonth) === 1;

	return {
		beverages,
		isOneBeforeMostRecent,
		isTheOldest: month === OLDEST_LIST.month && year === OLDEST_LIST.year,
		scope: {
			month,
			year
		}
	};
};
