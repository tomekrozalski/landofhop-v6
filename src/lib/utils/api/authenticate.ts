import * as jwt from 'jsonwebtoken';
import type { RequestEvent } from '@sveltejs/kit';
import { JWT_SECRET } from '$env/static/private';
import { sessions } from '$lib/db/mongo';
import { generateTokens, updateSession } from './sessions';

const authenticate = async ({
	cookies,
	getClientAddress,
	request
}: RequestEvent): Promise<boolean> => {
	const accessToken = cookies.get('accessToken');
	const refreshToken = cookies.get('refreshToken');

	if (!accessToken && !refreshToken) {
		return false;
	}

	if (accessToken) {
		try {
			const payload = jwt.verify(accessToken, JWT_SECRET) as jwt.JwtPayload;

			const session = await sessions.findOne({
				sessionToken: payload.sessionToken,
				userId: payload.userId
			});

			return session?.valid;
		} catch (e) {
			return false;
		}
	}

	if (refreshToken) {
		try {
			const payload = jwt.verify(refreshToken, JWT_SECRET) as jwt.JwtPayload;

			const session = await sessions.findOne({
				sessionToken: payload.sessionToken
			});

			if (!session?.valid) {
				return false;
			}

			const newSessionToken = await updateSession({
				ip: getClientAddress(),
				sessionToken: session.sessionToken,
				userAgent: request.headers.get('user-agent') ?? ''
			});

			generateTokens({
				cookies,
				sessionToken: newSessionToken,
				userId: session.userId.toString()
			});

			return true;
		} catch (e) {
			return false;
		}
	}

	return false;
};

export default authenticate;
