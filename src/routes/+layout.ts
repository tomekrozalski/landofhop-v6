import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { detectLocale } from '$lib/i18n/i18n-util';

export const load = async ({ data, params }) => {
	const locale = detectLocale(() => [params.lang ?? '']);
	await loadLocaleAsync(locale);
	setLocale(locale);

	return data;
};
