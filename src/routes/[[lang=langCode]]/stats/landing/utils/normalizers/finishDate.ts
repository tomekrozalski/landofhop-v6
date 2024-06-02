import { getMonth, getYear, max } from 'date-fns';
import type { FinishDate } from './Output.d';
import type { RawLandingStats } from './RawLandingStats.d';

const finishData = (values: RawLandingStats[]): FinishDate => {
	const dates = values.map(({ added }) => new Date(added));
	const latest = max(dates);

	return {
		month: getMonth(latest) + 1,
		year: getYear(latest)
	};
};

export default finishData;
