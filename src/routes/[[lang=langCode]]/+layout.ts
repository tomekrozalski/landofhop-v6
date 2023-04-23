import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { detectLocale } from '$lib/i18n/i18n-util';
import authentication from '$lib/utils/stores/authentication';

export const load = async ({ data, params }) => {
	if (data.authenticated) {
		authentication.setLoginStatus('fulfilled');
	} else {
		authentication.logOut();
	}

	const locale = detectLocale(() => [params.lang ?? '']);
	await loadLocaleAsync(locale);
	setLocale(locale);

	return data;
};
