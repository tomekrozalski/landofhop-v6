import { StyleGroups } from '$lib/db/enums/StyleGroups.enum';
import type LanguageValue from '$lib/db/types/LanguageValue.d';

export type RawStylesStats = {
	amount: number;
	badge: string;
	name: LanguageValue;
	group: StyleGroups;
};
