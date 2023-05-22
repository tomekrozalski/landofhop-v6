import bcrypt from 'bcryptjs';
import { superValidate } from 'sveltekit-superforms/server';
import { error, fail, redirect } from '@sveltejs/kit';
import { users } from '$lib/db/mongo';
import { createSession, generateTokens } from '$lib/utils/api/sessions';
import validationSchema from './validationSchema';

export const load = async () => {
	const form = await superValidate(validationSchema);

	return { form, test: Math.random() };
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event.request, validationSchema);

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
			ip: event.getClientAddress(),
			userId: user._id.toString(),
			userAgent: event.request.headers.get('user-agent') ?? ''
		});

		if (!sessionToken) {
			throw error(500, 'Creating session failed');
		}

		generateTokens({
			cookies: event.cookies,
			sessionToken,
			userId: user._id.toString()
		});

		throw redirect(303, '/dashboard/add-new-beverage');
	}
};
