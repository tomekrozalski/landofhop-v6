import {
	addMonths,
	endOfMonth,
	format,
	isAfter,
	isBefore,
	isSameMonth,
	startOfMonth,
	subMonths
} from 'date-fns';
import { error } from '@sveltejs/kit';
import { basics } from '$lib/db/mongo';
import { getBreadcrumbPhrase, getLatestMonth } from '$lib/utils/api';
import { OLDEST_LIST } from '$lib/utils/constants';
import normalizeApiData from '$lib/templates/BeverageList/normalizeApiData';

// export const config = {
// 	isr: { expiration: 60 }
// };

export const load = async ({ locals: { locale }, params }) => {
	const [year, month] = params.date.split('-').map((elem) => +elem) as [number, number];

	const latestMonth = await getLatestMonth();
	const listDate = new Date(year, month - 1);
	const nextMonth = addMonths(listDate, 1);
	const previousMonth = subMonths(listDate, 1);

	if (month < 1 || month > 12) {
		throw error(404, 'Wrong date format');
	}

	if (isAfter(listDate, subMonths(latestMonth, 1)) || isBefore(listDate, new Date(2017, 5))) {
		throw error(404, 'Date our of scope');
	}

	const rawBasics = await basics
		.find({
			added: {
				$lt: endOfMonth(listDate),
				$gte: startOfMonth(listDate)
			}
		})
		.sort({ added: -1 })
		.toArray();

	const beverages = normalizeApiData(rawBasics, locale);

	return {
		beverages,
		breadcrumbs: {
			phrase: getBreadcrumbPhrase(listDate, locale),
			next: {
				link: isSameMonth(latestMonth, nextMonth) ? '/' : '/list/' + format(nextMonth, 'yyyy-MM'),
				phrase: getBreadcrumbPhrase(nextMonth, locale)
			},
			...(!(month === OLDEST_LIST.month && year === OLDEST_LIST.year) && {
				previous: {
					link: '/list/' + format(previousMonth, 'yyyy-MM'),
					phrase: getBreadcrumbPhrase(previousMonth, locale)
				}
			})
		}
	};
};
