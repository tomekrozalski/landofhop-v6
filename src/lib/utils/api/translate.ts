import type { Locales } from '$lib/i18n/i18n-types';

const translate = <T extends { language?: string }>(values: T[], desiredLanguage: Locales): T =>
	values.find((item) => item.language === desiredLanguage) ||
	values.find((item) => !item.language) ||
	values[0];

export default translate;
