import { basics } from '$lib/db/mongo';
import { MAX_BEVERAGES_ON_PAGE } from '$lib/utils/constants';
import normalizeApiData from '$lib/templates/BeverageList/normalizeApiData';

export const prerender = true;

export const load = async () => {
	const total: number = await basics.countDocuments();
	const rawBasics = await basics.find().sort({ added: -1 }).limit(MAX_BEVERAGES_ON_PAGE).toArray();
	const beverages = normalizeApiData(rawBasics);

	return {
		beverages,
		total
	};
};
