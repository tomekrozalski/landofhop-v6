import { endOfMonth, format, subMonths } from 'date-fns';
import locale from 'date-fns/locale';
import { basics } from '$lib/db/mongo';
import normalizeApiData from '$lib/templates/BeverageList/normalizeApiData';
import getLatestMonth from '$lib/utils/api/list/getLatestMonth';

// export const config = {
// 	isr: { expiration: 60 }
// };

export const load = async ({ locals }) => {
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

	const beverages = normalizeApiData(rawBasics, locals.locale);

	return {
		beverages,
		breadcrumbs: {
			phrase: format(currentDate, 'LLLL yyyy', { locale: locals.locale === 'pl' ? locale.pl : undefined }),
			previous: {
				link: '/list/' + format(subMonths(new Date(year, month), 2), 'yyyy-MM'),
				phrase: format(subMonths(new Date(year, month), 2), 'LLLL yyyy', { locale: locals.locale === 'pl' ? locale.pl : undefined })
			}
		},
	};
};
