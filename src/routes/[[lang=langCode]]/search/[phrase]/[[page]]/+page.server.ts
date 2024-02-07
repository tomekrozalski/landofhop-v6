import { beverages } from '$lib/db/mongo';
import { MAX_BEVERAGES_ON_PAGE } from '$lib/utils/constants';
import beveragesToBasics from '$lib/templates/SearchResults/beverageToBasics';
import type { Basics } from '$lib/templates/BeverageList/Basics.d';

export const load = async ({ locals: { locale }, params }) => {
	const page = params.page ?? 1;
	const phrase = params.phrase;

	const query = {
		$or: [
			// FIND BY:
			// Name
			{
				'label.general.name.value': { $regex: new RegExp(phrase, 'i') }
			},
			// Brand name
			{
				'label.general.brand.name.value': {
					$regex: new RegExp(phrase, 'i')
				}
			},
			// Series (label / producer)
			{
				'label.general.series.value': {
					$regex: new RegExp(phrase, 'i')
				}
			},
			{
				'producer.general.series.value': {
					$regex: new RegExp(phrase, 'i')
				}
			},
			// Style (label / producer / editorial)
			{
				'label.brewing.style.value': {
					$regex: new RegExp(phrase, 'i')
				}
			},
			{
				'producer.brewing.style.value': {
					$regex: new RegExp(phrase, 'i')
				}
			},
			{
				'editorial.brewing.style.value': {
					$regex: new RegExp(phrase, 'i')
				}
			},
			// Barcode
			{ 'label.general.barcode': { $regex: new RegExp(phrase, 'i') } },
			// Tale (label / producer)
			{
				'label.general.tale.lead': { $regex: new RegExp(phrase, 'i') }
			},
			{
				'label.general.tale.article': {
					$regex: new RegExp(phrase, 'i')
				}
			},
			{
				'produder.general.tale.lead': {
					$regex: new RegExp(phrase, 'i')
				}
			},
			{
				'produder.general.tale.article': {
					$regex: new RegExp(phrase, 'i')
				}
			}
		]
	};

	const rawValues = await beverages
		.aggregate([
			{
				$facet: {
					count: [{ $match: query }, { $count: 'count' }],
					values: [
						{ $sort: { added: -1 } },
						{ $match: query },
						...(page ? [{ $skip: +page * MAX_BEVERAGES_ON_PAGE - MAX_BEVERAGES_ON_PAGE }] : []),
						{ $limit: MAX_BEVERAGES_ON_PAGE }
					]
				}
			}
		])
		.map(({ count, values }) => ({
			count: count[0]?.count ?? 0,
			values: values.map(beveragesToBasics(locale))
		}))
		.toArray();

	return {
		beverages: rawValues[0].values as Basics[],
		total: rawValues[0].count as number
	};
};
