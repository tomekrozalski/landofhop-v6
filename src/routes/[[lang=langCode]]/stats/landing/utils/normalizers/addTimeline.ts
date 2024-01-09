import { add, format, isBefore, max, min } from 'date-fns';
import { ContainerType } from '$lib/db/enums/Beverage.enum';
import type { AddTimelineBar } from './Output.d';
import type { RawLandingStats } from './RawLandingStats.d';

const addTimeline = (values: RawLandingStats[]): AddTimelineBar[] => {
	const domain: AddTimelineBar[] = [];
	const dates = values.map(({ added }) => new Date(added));
	const earliest = min(dates);
	const latest = max(dates);
	const endpoint = new Date(`${format(add(latest, { months: 1 }), 'yyyy-MM')}-01`);
	let current = earliest;

	do {
		domain.push({
			date: format(current, 'yyyy-MM'),
			[ContainerType.bottle]: 0,
			[ContainerType.can]: 0
		});

		current = add(current, { months: 1 });
	} while (isBefore(current, endpoint));

	values.forEach(({ added, container }) => {
		const index = domain.findIndex(({ date }) => date === format(new Date(added), 'yyyy-MM'));

		domain[index][container.type] += 1;
	});

	return domain;
};

export default addTimeline;
