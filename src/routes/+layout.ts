import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { setLocale } from '$lib/i18n/i18n-svelte';

export const load = async ({ data }) => {
	await loadLocaleAsync(data.locale);
	setLocale(data.locale);

	return data;
};
