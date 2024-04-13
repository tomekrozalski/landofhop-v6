import { json } from '@sveltejs/kit';
import { institutions } from '$lib/db/mongo';

export const GET = async () => {
	const data: { badge: string }[] = await institutions
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

	return json(data);
};
