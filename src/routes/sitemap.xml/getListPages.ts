import { OLDEST_LIST } from '$lib/utils/constants';
import { getMonth, getYear } from 'date-fns';

const getListPages = (latest: Date): string[] => {
	const results = [OLDEST_LIST];

	const addNext = () => {
		const { month, year } = results[results.length - 1];

		if (month === 12) {
			results.push({ month: 1, year: year + 1 });
		} else {
			results.push({ month: month + 1, year });
		}

		if (year < getYear(latest) || (year === getYear(latest) && month < getMonth(latest) - 2)) { // @ToDo: to refactor
			addNext();
		}
	};

	addNext();

	return results.map((data) => `${data.year}-${data.month.toString().padStart(2, '0')}`);
};

export default getListPages;
