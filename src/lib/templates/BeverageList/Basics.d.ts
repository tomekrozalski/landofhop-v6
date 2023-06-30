import type LanguageValue from '$lib/db/types/LanguageValue.d';

export type Basics = {
	shortId: string;
	badge: string;
	brand: {
		badge: string;
		name: LanguageValue;
	};
	name: LanguageValue;
	coverImage?: {
		height: number;
		width: number;
		outline: string;
	};
	containerType: ContainerType;
	added: string;
};
