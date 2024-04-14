import type LanguageValue from '$lib/db/types/LanguageValue.d';

type Institution = {
	badge: string;
	name: LanguageValue;
	owner?: {
		badge: string;
		name: LanguageValue;
		website?: string;
	};
	shortId: string;
	website?: string;
};

export default Institution;
