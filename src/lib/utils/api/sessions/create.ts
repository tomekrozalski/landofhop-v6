import { randomBytes } from 'crypto';
import { sessions } from '$lib/db/mongo';

type CreateSessionTypes = {
	ip: string;
	userId: string;
	userAgent: string;
};

export const createSession = async ({ ip, userId, userAgent }: CreateSessionTypes) => {
	try {
		const sessionToken = randomBytes(43).toString('hex');

		await sessions.insertOne({
			createdAt: new Date(),
			ip,
			sessionToken,
			updatedAt: new Date(),
			userAgent,
			userId,
			valid: true
		});

		return sessionToken;
	} catch (err) {
		return false;
	}
};
