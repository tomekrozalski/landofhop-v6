import { redirect } from '@sveltejs/kit';
import { i18n } from '$lib/i18n/i18n-util';
import type { Locales } from '$lib/i18n/i18n-types';
import { loadAllLocales } from '$lib/i18n/i18n-util.sync';
import { start_mongo } from '$lib/db/mongo';
import { authenticate } from '$lib/utils/api';

start_mongo()
	.then(() => {
		console.log('Mongo started');
	})
	.catch(() => {
		console.error('Mongo launch failed');
	});

loadAllLocales();
const L = i18n();

export const handle = async ({ event, resolve }) => {
	/* ---------------*/
	/* Authentication */
	event.locals.authenticated = false;

	if (event.cookies.get('accessToken') || event.cookies.get('refreshToken')) {
		event.locals.authenticated = await authenticate(event);
	}

	if (event.url.pathname.startsWith('/dashboard') && !event.locals.authenticated) {
		redirect(303, '/login');
	}

	if (event.url.pathname.startsWith('/en/dashboard') && !event.locals.authenticated) {
		redirect(303, '/en/login');
	}

	/* ---------------*/
	/* i18n */

	// read language slug
	const locale: Locales = event.url.pathname.startsWith('/en') ? 'en' : 'pl';
	const LL = L[locale];

	// bind locale and translation functions to current request
	event.locals.locale = locale;
	event.locals.LL = LL;

	// replace html lang attribute with correct language
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale)
	});

	return response;
};
