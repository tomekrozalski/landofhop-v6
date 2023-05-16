import { endOfMonth, getYear } from 'date-fns';
import { error } from '@sveltejs/kit';
import { basics } from '$lib/db/mongo';
import normalizeApiData from '$lib/templates/BeverageList/normalizeApiData';

export const prerender = true;

export const load = async ({ params }) => {
	const [year, month] = params.date.split('-').map((elem) => +elem);
	const date = new Date(year, month - 1);

	if (year > getYear(new Date()) || year < 2017 || month > 12) {
		throw error(404, { message: 'Date our of scope' });
	}

	const rawBasics = await basics
		.find({
			added: {
				$lt: endOfMonth(date),
				$gte: date
			}
		})
		.sort({ added: -1 })
		.toArray();

	if (!rawBasics.length) {
		throw error(404, { message: 'Date our of scope' });
	}

	const beverages = normalizeApiData(rawBasics);

	return {
		beverages,
		scope: {
			month,
			year
		}
	};
};
