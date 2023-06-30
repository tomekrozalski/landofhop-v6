import type { ContainerType } from '../types/Beverage.enum';
import type LanguageValue from './LanguageValue.d';

export type RawBasics = {
	// _id: string;
	shortId: string;
	badge: string;
	brand: {
		badge: string;
		name: LanguageValue[];
	};
	name: LanguageValue[];
	coverImage?: {
		height: number;
		width: number;
		outlines: string;
	};
	containerType: ContainerType;
	added: Date;
};
