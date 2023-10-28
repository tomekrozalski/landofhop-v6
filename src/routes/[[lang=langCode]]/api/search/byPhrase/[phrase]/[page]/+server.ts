import { json } from '@sveltejs/kit';
import { beverages } from '$lib/db/mongo';
import beveragesToBasics from '$lib/templates/SearchResults/beverageToBasics';
import type { Locales } from '$lib/i18n/i18n-types.js';

export const GET = async ({ params }) => {
	const language = (params.lang as Locales) ?? 'pl';
	const page = params.page ?? 1;
	const phrase = params.phrase ?? '';

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
						...(page ? [{ $skip: +page * 50 - 50 }] : []),
						{ $limit: 50 }
					]
				}
			}
		])
		.map(({ count, values }) => ({
			count: count[0]?.count ?? 0,
			values: values.map(beveragesToBasics(language))
		}))
		.toArray();

	return json({
		beverages: rawValues[0].values,
		total: rawValues[0].count
	});
};
