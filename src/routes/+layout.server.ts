import { setLocale } from '$lib/i18n/i18n-svelte';

export const load = async ({ locals, request }) => {
	console.log('?');

	const pathname = new URL(request.url).pathname;
	const lang = pathname.startsWith('/en') ? 'en' : 'pl';
	setLocale(lang);

	return {
		authenticated: locals.authenticated
	};
};
