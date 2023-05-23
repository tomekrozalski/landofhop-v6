import { error, redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';
import { removeTokens } from '$lib/utils/api/sessions';
import { sessions } from '$lib/db/mongo';

export const POST = async ({ cookies }) => {
	if (!cookies.get('refreshToken')) {
		throw error(400, 'Already logged out');
	}

	const { sessionToken } = jwt.verify(
		cookies.get('refreshToken') ?? '',
		JWT_SECRET
	) as jwt.JwtPayload;

	if (!sessionToken) {
		throw error(401, 'Logged out failed');
	}

	await sessions.deleteOne({ sessionToken });
	removeTokens(cookies);

	throw redirect(303, '/');
};
