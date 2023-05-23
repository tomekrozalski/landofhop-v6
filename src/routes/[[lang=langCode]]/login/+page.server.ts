import bcrypt from 'bcryptjs';
import { superValidate } from 'sveltekit-superforms/server';
import { error, fail, redirect } from '@sveltejs/kit';
import { users } from '$lib/db/mongo';
import { createSession, generateTokens } from '$lib/utils/api/sessions';
import validationSchema from './validationSchema';
import { get } from 'svelte/store';
import { LL } from '$lib/i18n/i18n-svelte';

export const load = async ({ parent, request }) => {
	await parent();

	console.log('->', request);
	const form = await superValidate(validationSchema);

	console.log('1', get(LL).about.header());

	return { form };
};

export const actions = {
	default: async ({ cookies, getClientAddress, request }) => {
		const form = await superValidate(request, validationSchema);

		if (!form.valid) {
			return fail(400, { form });
		}

		const { email, password } = form.data;
		const user = await users.findOne({ email });

		if (!user) {
			throw error(401, 'Authentication failed');
		}

		const isAuthorized = await bcrypt.compare(password, user.password);

		if (!isAuthorized) {
			throw error(401, 'Authentication failed');
		}

		const sessionToken = await createSession({
			ip: getClientAddress(),
			userId: user._id.toString(),
			userAgent: request.headers.get('user-agent') ?? ''
		});

		if (!sessionToken) {
			throw error(500, 'Creating session failed');
		}

		generateTokens({
			cookies,
			sessionToken,
			userId: user._id.toString()
		});

		throw redirect(303, '/dashboard/add-new-beverage');
	}
};
