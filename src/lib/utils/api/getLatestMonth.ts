import { basics } from '$lib/db/mongo';

const getLatestMonth = async () => {
	const lastBasics = await basics.find().sort({ added: -1 }).limit(1).toArray();
	return new Date(lastBasics[0].added);
};

export default getLatestMonth;
