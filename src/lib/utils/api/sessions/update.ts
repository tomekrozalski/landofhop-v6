import { randomBytes } from 'crypto';
import { sessions } from '$lib/db/mongo';

type UpdateSessionTypes = {
	ip: string;
	sessionToken: string;
	userAgent: string;
};

export const updateSession = async ({ ip, sessionToken, userAgent }: UpdateSessionTypes) => {
	try {
		const newSessionToken = randomBytes(43).toString('hex');

		await sessions.updateOne(
			{ sessionToken },
			{
				$set: {
					ip,
					sessionToken: newSessionToken,
					updatedAt: new Date(),
					userAgent,
					valid: true
				}
			}
		);

		return newSessionToken;
	} catch (err) {
		throw new Error('Session update failed');
	}
};
