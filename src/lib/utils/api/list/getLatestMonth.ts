import { getMonth, getYear } from 'date-fns';
import { basics } from '$lib/db/mongo';

const getLatestMonth = async () => {
	const lastBasics = await basics.find().sort({ added: -1 }).limit(1).toArray();
	const date = new Date(lastBasics[0].added);
	const month = getMonth(date) + 1;
	const year = getYear(date);

	return { month, year };
};

export default getLatestMonth;
