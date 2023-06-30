import { error } from '@sveltejs/kit';
import { detailsNormalizer, getAdminData, getDetails, getNext, getPrevious } from './utils/load';

export const load = async ({ locals, params }) => {
	const badge = params.badge;
	const shortId = params.shortId;

	if (!badge || !shortId) {
		throw error(404, 'Incorrect params');
	}

	const beverage = await getDetails({ shortId });
	const formattedDetails = detailsNormalizer(beverage, locals.locale);

	return {
		previous: getPrevious({ added: beverage.added }),
		details: formattedDetails,
		next: getNext({ added: beverage.added }),
		streamed: {
			...(locals.authenticated && { adminData: getAdminData(shortId, locals.locale) })
		}
	};
};
