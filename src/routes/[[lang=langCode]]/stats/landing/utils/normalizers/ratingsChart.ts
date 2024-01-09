import { isNumber, round } from 'lodash-es';
import type { RatingsChartBar } from './Output.d';
import type { RawLandingStats } from './RawLandingStats.d';

const ratingsChart = (values: RawLandingStats[]): RatingsChartBar[] => {
	const domain: RatingsChartBar[] = [];

	for (let value = 1; value <= 5; value = round(value + 0.1, 1)) {
		domain.push({
			beverages: 0,
			value
		});
	}

	values
		.map(({ ratings }) => ratings)
		.filter((value) => isNumber(value))
		.forEach((rating) => {
			const match = domain.find(({ value }) => value === Number((rating as number).toFixed(1)));

			if (match && isNumber(match.beverages)) {
				match.beverages += 1;
			}
		});

	return domain;
};

export default ratingsChart;
