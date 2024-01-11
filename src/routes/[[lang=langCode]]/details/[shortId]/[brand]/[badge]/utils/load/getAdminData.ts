import { format } from 'date-fns';
import { error } from '@sveltejs/kit';
import { beverages } from '$lib/db/mongo';
import type { Locales } from '$lib/i18n/i18n-types';
import type { RawBeverage } from '$lib/db/types/RawBeverage.d';
import { DateFormat } from '$lib/db/enums/Globals.enum';
import type { AdminData } from '../types/AdminData.d';

const getAdminData = async (shortId: string, desiredLanguage: Locales): Promise<AdminData> => {
	const beverage: RawBeverage | null = await beverages.findOne({ shortId });

	if (!beverage) {
		error(404, 'Wrong beverage id');
	}

	const ratings = beverage.editorial?.ratings;

	return {
		...(beverage.editorial?.notes && { notes: beverage.editorial.notes }),
		...(beverage.updated && {
			updated: format(new Date(beverage.updated), DateFormat[desiredLanguage])
		}),
		...(ratings && {
			ratings: {
				...(ratings.rateBeer?.beverageId && {
					rateBeer: ratings.rateBeer.beverageId
				}),
				...(ratings.untappd?.beverageSlug && {
					untappd: ratings.untappd.beverageSlug
				})
			}
		})
	};
};

export default getAdminData;
