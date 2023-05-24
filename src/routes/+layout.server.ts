export const load = async ({ locals }) => ({
	authenticated: locals.authenticated,
	locale: locals.locale
});
