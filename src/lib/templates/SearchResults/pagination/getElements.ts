import { MAX_BEVERAGES_ON_PAGE } from '$lib/utils/constants';

const getElements = (current: number, total: number): number[] => {
	const pagesCount = Math.ceil(total / MAX_BEVERAGES_ON_PAGE);
	const completeArray = new Array(pagesCount).fill('').map((_, i) => i + 1);

	if (completeArray.length <= 6) {
		return completeArray;
	}

	const middle = completeArray.indexOf(current);
	let start = middle - 3 >= 1 ? middle - 3 : 0;

	if (pagesCount - current < 4) {
		start = pagesCount - 7;
	}

	const narrowedArray: number[] = completeArray.slice(start, start + 7);

	if (narrowedArray[2] > 3) {
		narrowedArray[0] = 1;
		narrowedArray[1] = 0;
	}

	if (narrowedArray[narrowedArray.length - 1] < pagesCount) {
		narrowedArray[narrowedArray.length - 1] = pagesCount;
		narrowedArray[narrowedArray.length - 2] = 0;
	}

	return narrowedArray;
};

export default getElements;
