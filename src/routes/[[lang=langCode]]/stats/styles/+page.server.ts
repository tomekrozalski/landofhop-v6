import { beverages, styles } from '$lib/db/mongo';
import { translate } from '$lib/utils/api';
import type { Style } from '$lib/utils/adminDataTypes/Style.d';
import type LanguageValue from '$lib/db/types/LanguageValue.d';
import type { RawStylesStats } from './RawStylesStats.d';

export const prerender = true;

export const load = async ({ locals: { locale }, parent }) => {
	let styleList: Style[] = [];

	const rawData: RawStylesStats[] = await styles
		.find()
		.map(({ badge, name, group }) => ({
			amount: 0,
			badge,
			name: translate(name, locale),
			group
		}))
		.toArray();

	type StyleTags = {
		badge: string;
		name: LanguageValue[];
	};

	const beverageList = (await beverages
		.find(
			{},
			{
				projection: {
					_id: 0,
					styleTags: '$editorial.brewing.styleTags'
				}
			}
		)
		.toArray()) as { styleTags?: StyleTags[] }[];

	beverageList
		.filter(({ styleTags }) => styleTags?.length)
		.forEach((props) => {
			(props.styleTags as StyleTags[]).forEach((styleTag) => {
				const index = rawData.findIndex(({ badge }) => badge === styleTag.badge);

				rawData[index].amount += 1;
			});
		});

	const { authenticated } = await parent();

	if (authenticated) {
		styleList = await styles
			.find(
				{},
				{
					projection: {
						_id: 0,
						badge: 1,
						name: 1,
						group: 1
					}
				}
			)
			.toArray();
	}

	return { statsData: rawData.filter(({ amount }) => amount), styleList };
};
