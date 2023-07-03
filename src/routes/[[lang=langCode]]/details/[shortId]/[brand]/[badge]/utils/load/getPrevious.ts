import { basics } from '$lib/db/mongo';
import type { LinkData } from '../types/LinkData.d';

const getPrevious = async (added: Date): Promise<LinkData | null> => {
	const previousBasics: LinkData[] = await basics
		.find({ added: { $lt: added } })
		.sort({ added: -1 })
		.limit(1)
		.map(({ badge, brand, shortId }) => ({
			badge,
			brand: brand.badge,
			shortId
		}))
		.toArray();

	return previousBasics.length ? previousBasics[0] : null;
};

export default getPrevious;
