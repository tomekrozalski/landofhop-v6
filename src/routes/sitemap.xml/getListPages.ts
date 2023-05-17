import { OLDEST_LIST } from '$lib/utils/constants';

type MonthYearTypes = {
	month: number;
	year: number;
};

const getListPages = (latest: MonthYearTypes): MonthYearTypes[] => {
	const results = [OLDEST_LIST];

	const addNext = () => {
		const { month, year } = results[results.length - 1];

		if (month === 12) {
			results.push({ month: 1, year: year + 1 });
		} else {
			results.push({ month: month + 1, year });
		}

		if (year < latest.year || (year === latest.year && month < latest.month)) {
			addNext();
		}
	};

	addNext();

	return results;
};

export default getListPages;
