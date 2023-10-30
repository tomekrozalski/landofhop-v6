import { endOfMonth, format, startOfMonth, subMonths } from 'date-fns';
import { basics } from '$lib/db/mongo';
import normalizeApiData from '$lib/templates/BeverageList/normalizeApiData';
import { getBreadcrumbPhrase, getLatestMonth } from '$lib/utils/api';

export const prerender = true;

export const load = async ({ locals: { locale } }) => {
	const currentDate = await getLatestMonth();

	const rawBasics = await basics
		.find({
			added: {
				$lt: endOfMonth(currentDate),
				$gte: startOfMonth(currentDate)
			}
		})
		.sort({ added: -1 })
		.toArray();

	const beverages = normalizeApiData(rawBasics, locale);

	return {
		beverages,
		breadcrumbs: {
			phrase: getBreadcrumbPhrase(currentDate, locale),
			previous: {
				link: '/list/' + format(subMonths(currentDate, 1), 'yyyy-MM'),
				phrase: getBreadcrumbPhrase(subMonths(currentDate, 1), locale)
			}
		}
	};
};
