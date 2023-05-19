import bcrypt from 'bcryptjs';
import { error } from '@sveltejs/kit';
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
		throw error(401, 'Authentication failed');
	}

	try {
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

		return { form };
	} catch {
		throw error(500, 'Decryption failed');
	}
};

export default onSubmit;
