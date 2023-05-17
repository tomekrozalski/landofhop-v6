import { OLDEST_LIST } from '$lib/utils/constants';

type MonthYearTypes = {
	month: number;
	year: number;
};

const getListPages = (latest: MonthYearTypes): string[] => {
	const results = [OLDEST_LIST];

	const addNext = () => {
		const { month, year } = results[results.length - 1];

		if (month === 12) {
			results.push({ month: 1, year: year + 1 });
		} else {
			results.push({ month: month + 1, year });
		}

		if (year < latest.year || (year === latest.year && month < latest.month - 2)) {
			addNext();
		}
	};

	addNext();

	return results.map((data) => `${data.year}-${data.month.toString().padStart(2, '0')}`);
};

export default getListPages;
