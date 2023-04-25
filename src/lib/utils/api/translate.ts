import type { AppLanguage } from '$lib/db/enums/Globals.enum';
import type { LanguageValue } from '$lib/db/types/LanguageValue.d';

const translate = (values: LanguageValue[], desiredLanguage: AppLanguage): LanguageValue => {
	return (
		values.find((item) => item.language === desiredLanguage) ||
		values.find((item) => !item.language) ||
		values[0]
	);
};

export default translate;
