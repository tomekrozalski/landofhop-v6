import bcrypt from 'bcryptjs';
import { fail } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import type { Validation } from 'sveltekit-superforms';
import { users } from '$lib/db/mongo';
import { createSession, generateTokens } from '$lib/utils/api/sessions';
import type { ValidationSchemaTypes } from './validationSchema';

const onSubmit = async (
	{ cookies, getClientAddress, request }: RequestEvent,
	form: Validation<ValidationSchemaTypes>
) => {
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
};

export default onSubmit;
