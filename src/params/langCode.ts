import { baseLocale, locales } from '$lib/i18n/i18n-util';
import type { Locales } from '$lib/i18n/i18n-types';

export const match = (param) => {
	return param !== baseLocale && locales.includes(param as Locales);
};
