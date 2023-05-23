import { redirect } from '@sveltejs/kit';
import { minify } from 'html-minifier';
import { start_mongo } from '$lib/db/mongo';
import { authenticate } from '$lib/utils/api';

const minification_options = {
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: false,
	removeAttributeQuotes: true,
	removeComments: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true
};

start_mongo()
	.then(() => {
		console.log('Mongo started');
	})
	.catch(() => {
		console.error('Mongo launch failed');
	});

export const handle = async ({ event, resolve }) => {
	event.locals.authenticated = false;

	if (event.cookies.get('accessToken') || event.cookies.get('refreshToken')) {
		event.locals.authenticated = await authenticate(event);
	}

	if (event.url.pathname.startsWith('/dashboard') && !event.locals.authenticated) {
		throw redirect(303, '/login');
	}

	if (event.url.pathname.startsWith('/en/dashboard') && !event.locals.authenticated) {
		throw redirect(303, '/en/login');
	}

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', event.params.lang ?? 'pl')
	});

	const mode = process.env.NODE_ENV;
	const dev = mode === 'development';

	if (!dev && response.headers.get('content-type') === 'text/html') {
		return new Response(minify(await response.text(), minification_options), {
			status: response.status,
			headers: response.headers
		});
	}

	return response;
};
