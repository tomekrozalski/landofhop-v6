import { differenceInMonths, endOfMonth, format, isAfter, isBefore, subMonths } from 'date-fns';
import locale from 'date-fns/locale';
import { error } from '@sveltejs/kit';
import { basics } from '$lib/db/mongo';
import getLatestMonth from '$lib/utils/api/list/getLatestMonth';
import { OLDEST_LIST } from '$lib/utils/constants';
import normalizeApiData from '$lib/templates/BeverageList/normalizeApiData';

// export const config = {
// 	isr: { expiration: 60 }
// };

export const load = async ({ locals, params }) => {
	const latestMonth = await getLatestMonth();

	const [year, month] = params.date.split('-').map((elem) => +elem) as [number, number];
	const date = new Date(year, month - 1);

	if (month < 1 || month > 12) {
		throw error(404, 'Wrong date format');
	}

	if (
		isAfter(date, new Date(latestMonth.year, latestMonth.month - 2)) ||
		isBefore(date, new Date(2017, 5))
	) {
		throw error(404, 'Date our of scope');
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

	const beverages = normalizeApiData(rawBasics, locals.locale);
	const latestMonthDate = new Date(latestMonth.year, latestMonth.month);
	const nextMonth = new Date(year, month);
	const isOneBeforeMostRecent = differenceInMonths(latestMonthDate, nextMonth) === 1;

	return {
		beverages,
		breadcrumbs: {
			phrase: format(date, 'LLLL yyyy', { locale: locals.locale === 'pl' ? locale.pl : undefined }),
			next: {
				link: isOneBeforeMostRecent
					? '/'
					: '/list/' + format(nextMonth, 'yyyy-MM') ,
				phrase: format(nextMonth, 'LLLL yyyy', { locale: locals.locale === 'pl' ? locale.pl : undefined })
			},
			...(!(month === OLDEST_LIST.month && year === OLDEST_LIST.year) && {
				previous: {
					link: '/list/' + format(subMonths(new Date(year, month), 2), 'yyyy-MM'),
					phrase: format(subMonths(new Date(year, month), 2), 'LLLL yyyy', { locale: locals.locale === 'pl' ? locale.pl : undefined })
				}
			})
		},
	};
};
