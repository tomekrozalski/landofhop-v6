import { error, fail, redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms/server';
import { JWT_SECRET } from '$env/static/private';
import { removeTokens } from '$lib/utils/api/sessions';
import { sessions } from '$lib/db/mongo';
import getValidationSchema from '../beverage/Label/validationSchema';

export const actions = {
	logout: async ({ cookies, locals }) => {
		if (!cookies.get('refreshToken')) {
			error(400, 'Already logged out');
		}

		const { sessionToken } = jwt.verify(
			cookies.get('refreshToken') ?? '',
			JWT_SECRET
		) as jwt.JwtPayload;

		if (!sessionToken) {
			error(401, 'Logged out failed');
		}

		await sessions.deleteOne({ sessionToken });
		removeTokens(cookies);

		redirect(303, locals.LL.link('/'));
	},
	submit: async ({ request, locals }) => {
		const form = await superValidate(request, zod(getValidationSchema(locals.LL)));

		if (!form.valid) {
			console.log('is not valid');
			return fail(400, { form });
		}

		console.log('is ok?', form);

		// if (db.users.find({ where: { email: form.data.email } })) {
		//   return setError(form, 'email', 'E-mail already exists.');
		// }

		return { form };
	}
};

export const load = async ({ locals }) => {
	const form = await superValidate(zod(getValidationSchema(locals.LL)));

	return { form };
};
