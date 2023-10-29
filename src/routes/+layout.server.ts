export const config = {
	runtime: 'nodejs18.x'
};

export const load = async ({ locals }) => ({
	authenticated: locals.authenticated,
	locale: locals.locale
});
