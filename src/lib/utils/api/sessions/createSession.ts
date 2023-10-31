import { sessions } from '$lib/db/mongo';

type CreateSessionTypes = {
	ip: string;
	userId: string;
	userAgent: string;
};

const createSession = async ({ ip, userId, userAgent }: CreateSessionTypes) => {
	try {
		const sessionToken = crypto.randomUUID();

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

export default createSession;
