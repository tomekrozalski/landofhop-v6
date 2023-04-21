import { randomBytes } from 'crypto';
import { sessions } from '$lib/db/mongo';

export const createSession = async ({ userId }: { userId: string }) => {
	try {
		const sessionToken = randomBytes(43).toString('hex');

		await sessions.insertOne({
			createdAt: new Date(),
			ip: '127.0.0.1', // @ToDo: SvelteKit will allow to get IP: https://github.com/sveltejs/kit/pull/3993
			sessionToken,
			updatedAt: new Date(),
			userAgent:
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:96.0) Gecko/20100101 Firefox/96.0', // @ToDo: SvelteKit will allow to get userAgent
			userId,
			valid: true
		});

		return sessionToken;
	} catch (err) {
		return false;
	}
};
