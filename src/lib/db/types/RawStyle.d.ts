import { StyleGroups } from '$lib/db/enums/StyleGroups.enum';
import type LanguageValue from './LanguageValue.d';

export type RawStyle = {
	// _id: string;
	badge: string;
	name: LanguageValue[];
	group: StyleGroups;
};
