import { LanguageValue } from '$lib/db/types/LanguageValue.d';

export type Institution = {
	badge: string;
	name: LanguageValue[];
	shortId: string;
	owner?: {
		badge: string;
		name: LanguageValue[];
		shortId: string;
	};
};

export type FormattedInstitution = {
	badge: string;
	name: LanguageValue;
	shortId: string;
	owner?: {
		badge: string;
		name: LanguageValue;
		shortId: string;
	};
};
