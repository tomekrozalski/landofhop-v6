// import { get } from 'svelte/store';
import { error } from '@sveltejs/kit';
// import type { Locales } from '$lib/i18n/i18n-types';
// import authentication from '$lib/utils/stores/authentication';
// import { AppLanguage } from '$types/enums/Globals.enum';
// import { getAdminData, getDetails, getListPage, getNext, getPrevious } from './utils/load';
import { getDetails, getNext } from './utils/load';
import detailsNormalizer from './utils/load/getDetails/normalizer';

export const load = async ({ locals, params }) => {
	const badge = params.badge;
	const shortId = params.shortId;

	if (!badge || !shortId) {
		throw error(404, 'Incorrect params');
	}

	const beverage = await getDetails({ shortId });
	const formattedDetails = detailsNormalizer(beverage, locals.locale);

	return {
		// listPage: getListPage({ added: beverage.added }),
		// previous: getPrevious({ added: beverage.added }),
		details: formattedDetails,
		next: getNext({ added: beverage.added })
		// streamed: {
		// 	...(get(authentication).isLoggedIn && { adminData: getAdminData({ badge, shortId }) })
		// }
	};
};
