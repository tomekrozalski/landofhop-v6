import { format } from 'date-fns';
import { error } from '@sveltejs/kit';
import { getBreadcrumbPhrase, getLatestMonth } from '$lib/utils/api';
import { detailsNormalizer, getAdminData, getDetails, getNext, getPrevious } from './utils/load';

export const config = {
	isr: {
		expiration: 60,
		bypassToken: 'REPLACE_ME_WITH_SECRET_VALUE'
	}
};

export const load = async ({ locals: { authenticated, locale }, params }) => {
	const badge = params.badge;
	const shortId = params.shortId;

	if (!badge || !shortId) {
		throw error(404, 'Incorrect params');
	}

	const beverage = await getDetails({ shortId });
	const formattedDetails = detailsNormalizer(beverage, locale);
	const latestMonth = await getLatestMonth();
	const addedDate = new Date(beverage.added);

	return {
		previous: getPrevious(beverage.added),
		details: formattedDetails,
		breadcrumbs: {
			link:
				format(addedDate, 'M-yyyy') === format(latestMonth, 'M-yyyy')
					? '/'
					: `/list/${format(addedDate, 'yyyy-MM')}`,
			phrase: getBreadcrumbPhrase(addedDate, locale)
		},
		next: getNext(beverage.added),
		streamed: {
			...(authenticated && { adminData: getAdminData(shortId, locale) })
		}
	};
};
