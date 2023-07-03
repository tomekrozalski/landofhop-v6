import { format } from 'date-fns';
import locale from 'date-fns/locale';
import { error } from '@sveltejs/kit';
import getLatestMonth from '$lib/utils/api/list/getLatestMonth';
import { detailsNormalizer, getAdminData, getDetails, getNext, getPrevious } from './utils/load';

export const load = async ({ locals, params }) => {
	const badge = params.badge;
	const shortId = params.shortId;

	if (!badge || !shortId) {
		throw error(404, 'Incorrect params');
	}

	const beverage = await getDetails({ shortId });
	const formattedDetails = detailsNormalizer(beverage, locals.locale);
	const latestMonth = await getLatestMonth();
	const addedDate = new Date(beverage.added);
	const latestDate = new Date(latestMonth.year, latestMonth.month);

	console.log('addedDate', addedDate, format(addedDate, 'M-yyyy'))
	console.log('latestDate', latestDate, format(latestDate, 'M-yyyy'))

	return {
		previous: getPrevious({ added: beverage.added }),
		details: formattedDetails,
		breadcrumbs: {
			link: format(addedDate, 'M-yyyy') === format(latestDate, 'M-yyyy')
			? '/'
			: `/list/${format(addedDate, 'yyyy-MM')}`,
			phrase: format(addedDate, 'LLLL yyyy', { locale: locals.locale === 'pl' ? locale.pl : undefined })
		},
		next: getNext({ added: beverage.added }),
		streamed: {
			...(locals.authenticated && { adminData: getAdminData(shortId, locals.locale) })
		}
	};
};
