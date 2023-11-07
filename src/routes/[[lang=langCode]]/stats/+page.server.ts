import { beverages } from '$lib/db/mongo';
import { translate } from '$lib/utils/api';
import normalizers from './landing/utils/normalizers/normalizers';
import type { RawLandingStats } from './landing/utils/normalizers/RawLandingStats.d';

export const prerender = true;

export const load = async ({ locals: { locale } }) => {
	const rawData: RawLandingStats[] = await beverages
		.find(
			{},
			{
				projection: {
					_id: 0,
					shortId: 1,
					'label.general.brand': 1,
					'label.brewing.fermentation': 1,
					'producer.brewing.fermentation': 1,
					'editorial.brewing.fermentation': 1,
					'label.brewing.extract': 1,
					'producer.brewing.extract': 1,
					'label.brewing.alcohol': 1,
					'producer.brewing.alcohol': 1,
					'editorial.brewing.alcohol': 1,
					'label.container.type': 1,
					'editorial.ratings.total.value': 1,
					added: 1
				}
			}
		)
		.map(({ added, editorial, label, producer, shortId }) => ({
			shortId,
			brand: {
				badge: label.general.brand.badge,
				shortId: label.general.brand.shortId,
				name: translate(label.general.brand.name, locale)
			},
			...((label.brewing?.fermentation ||
				producer?.brewing?.fermentation ||
				editorial?.brewing?.fermentation) && {
				fermentation: {
					...(label.brewing?.fermentation && { label: label.brewing.fermentation }),
					...(producer?.brewing?.fermentation && { producer: producer.brewing.fermentation }),
					...(editorial?.brewing?.fermentation && { editorial: editorial.brewing.fermentation })
				}
			}),
			...((label.brewing?.extract || producer?.brewing?.extract) && {
				extract: {
					...(label.brewing?.extract && { label: label.brewing.extract }),
					...(producer?.brewing?.extract && { producer: producer.brewing.extract })
				}
			}),
			...((label.brewing?.alcohol || producer?.brewing?.alcohol || editorial?.brewing?.alcohol) && {
				alcohol: {
					...(label.brewing?.alcohol && { label: label.brewing.alcohol }),
					...(producer?.brewing?.alcohol && { producer: producer.brewing.alcohol }),
					...(editorial?.brewing?.alcohol && { editorial: editorial.brewing.alcohol })
				}
			}),
			...(editorial?.ratings?.total?.value && { ratings: editorial.ratings.total.value }),
			container: {
				type: label.container.type
			},
			added
		}))
		.toArray();

	const stats = normalizers(rawData, locale);

	return { stats };
};
