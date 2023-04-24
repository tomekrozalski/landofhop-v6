import { error, json } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';
import { removeTokens } from '$lib/utils/api/sessions';
import { sessions } from '$lib/db/mongo';

export const GET = async ({ cookies }) => {
	if (!cookies.get('refreshToken')) {
		throw error(400, 'Already logged out');
	}

	try {
		const { sessionToken } = jwt.verify(
			cookies.get('refreshToken') ?? '',
			JWT_SECRET
		) as jwt.JwtPayload;
		await sessions.deleteOne({ sessionToken });
		removeTokens(cookies);

		return json({ message: 'Logged out successfully' });
	} catch {
		throw error(401, 'Logged out failed');
	}
};
