import { add } from 'date-fns';
import jwt from 'jsonwebtoken';
import type { Cookies } from '@sveltejs/kit';
import { JWT_SECRET } from '$env/static/private';

type generateTokensTypes = {
	cookies: Cookies;
	sessionToken: string;
	userId: string;
};

const generateTokens = ({ cookies, sessionToken, userId }: generateTokensTypes) => {
	const accessToken = jwt.sign({ sessionToken, userId }, JWT_SECRET);
	const refreshToken = jwt.sign({ sessionToken }, JWT_SECRET);

	cookies.set('accessToken', accessToken, {
		httpOnly: true,
		path: '/',
		sameSite: 'strict',
		secure: true
	});

	cookies.set('refreshToken', refreshToken, {
		expires: add(new Date(), { weeks: 3 }),
		httpOnly: true,
		path: '/',
		sameSite: 'strict',
		secure: true
	});
};

export default generateTokens;
