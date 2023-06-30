import type LanguageValue from '../LanguageValue.d';

type Insitution = {
	badge: string;
	name: LanguageValue[];
	shortId: string;
	owner?: {
		badge: string;
		name: LanguageValue[];
		shortId: string;
	};
};

export default Insitution;
