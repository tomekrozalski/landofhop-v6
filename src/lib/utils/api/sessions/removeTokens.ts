import type { Cookies } from '@sveltejs/kit';

const removeTokens = (cookies: Cookies) => {
	cookies.set('accessToken', 'deleted', {
		expires: new Date(0),
		httpOnly: true,
		path: '/',
		sameSite: 'strict',
		secure: true
	});

	cookies.set('refreshToken', 'deleted', {
		expires: new Date(0),
		httpOnly: true,
		path: '/',
		sameSite: 'strict',
		secure: true
	});
};

export default removeTokens;
