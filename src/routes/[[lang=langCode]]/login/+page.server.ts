import bcrypt from 'bcryptjs';
import { superValidate } from 'sveltekit-superforms/server';
import { error, fail, redirect } from '@sveltejs/kit';
import { users } from '$lib/db/mongo';
import { createSession, generateTokens } from '$lib/utils/api/sessions';
import getValidationSchema from './validationSchema';

export const load = async ({ locals }) => {
	const form = await superValidate(getValidationSchema(locals.LL));

	return { form };
};

export const actions = {
	default: async ({ cookies, getClientAddress, request, locals }) => {
		const form = await superValidate(request, getValidationSchema(locals.LL));

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

		throw redirect(303, locals.LL.link('/dashboard/add-new-beverage'));
	}
};
