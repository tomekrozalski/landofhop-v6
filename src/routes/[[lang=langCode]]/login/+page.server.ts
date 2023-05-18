import bcrypt from 'bcryptjs';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { users } from '$lib/db/mongo';
import { createSession, generateTokens } from '$lib/utils/api/sessions';
import schema from './loginForm/validationSchema';

export const load = async () => {
	const form = await superValidate(schema);

	return { form };
};

export const actions = {
	default: async ({ cookies, request, getClientAddress }) => {
		const form = await superValidate(request, schema);

		if (!form.valid) {
			return fail(400, { form });
		}

		const { email, password } = form.data;
		const user = await users.findOne({ email });

		if (!user) {
			return fail(400, { form });
		}

		try {
			const isAuthorized = await bcrypt.compare(password, user.password);

			if (!isAuthorized) {
				return fail(400, { form });
			}

			const sessionToken = await createSession({
				ip: getClientAddress(),
				userId: user._id.toString(),
				userAgent: request.headers.get('user-agent') ?? ''
			});

			if (!sessionToken) {
				return fail(500, { form });
			}

			generateTokens({
				cookies,
				sessionToken,
				userId: user._id.toString()
			});

			return { form };
		} catch {
			return fail(500, { form });
		}
	}
};
