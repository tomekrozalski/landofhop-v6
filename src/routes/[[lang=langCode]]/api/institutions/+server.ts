import { json } from '@sveltejs/kit';
import { institutions } from '$lib/db/mongo';
import { translate } from '$lib/utils/api';
import type FormattedInstitution from '$lib/molecules/forms/selects/Institution.d';

export const GET = async ({ locals: { locale } }) => {
	const data = await institutions
		.find(
			{},
			{
				projection: {
					_id: 0,
					badge: 1,
					name: 1,
					owner: 1,
					shortId: 1,
					website: 1
				}
			}
		)
		.toArray();

	const formattedData: FormattedInstitution[] = data.map(
		({ badge, name, owner, shortId, website }) => ({
			badge,
			name: translate(name, locale),
			shortId,
			...(owner && {
				owner: {
					...owner,
					name: translate(owner.name, locale)
				}
			}),
			...(website && { website })
		})
	);

	return json(formattedData);
};
