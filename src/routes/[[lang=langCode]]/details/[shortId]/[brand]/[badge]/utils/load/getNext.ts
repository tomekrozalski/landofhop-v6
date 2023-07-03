import { basics } from '$lib/db/mongo';
import type { LinkData } from '../types/LinkData.d';

const getNext = async (added: Date): Promise<LinkData | null> => {
	const nextBasics: LinkData[] = await basics
		.find({ added: { $gt: added } })
		.sort({ added: 1 })
		.limit(1)
		.map(({ badge, brand, shortId }) => ({
			badge,
			brand: brand.badge,
			shortId
		}))
		.toArray();

	return nextBasics.length ? nextBasics[0] : null;
};

export default getNext;
