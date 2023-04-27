import { error, json } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { createSession, generateTokens } from '$lib/utils/api/sessions';
import { users } from '$lib/db/mongo';

export const POST = async ({ cookies, request, getClientAddress }) => {
	const { email, password } = await request.json();
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

		return json({ message: 'Logged in successfully' });
	} catch {
		throw error(500, 'Decryption failed');
	}
};
