import type { Locales } from '$lib/i18n/i18n-types';
import type { RawLandingStats } from './RawLandingStats.d';
import type {
	AddTimelineBar,
	AlcoholChartBar,
	Brand,
	GeneralStats,
	RatingsChartBar,
	TopBrandsTimelineBar,
	FinishDate
} from './Output';
import addTimeline from './addTimeline';
import alcoholChart from './alcoholChart';
import ratingsChart from './ratingsChart';
import { getTopBrands, topBrandsTimeline } from './topBrandsTimeline';
import finishDate from './finishDate';

const normalizers = (rawData: RawLandingStats[], locale: Locales): GeneralStats => {
	const addTimelineData: AddTimelineBar[] = addTimeline(rawData);
	const alcoholChartData: AlcoholChartBar[] = alcoholChart(rawData);
	const morePopularBrandsData: Brand[] = getTopBrands(rawData, 10);
	const ratingsChartData: RatingsChartBar[] = ratingsChart(rawData);
	const topBrandsTimelineData: TopBrandsTimelineBar[] = topBrandsTimeline(rawData);
	const finishDateData: FinishDate = finishDate(rawData);

	return {
		addTimelineData,
		alcoholChartData,
		fermentationTimelineData: [],
		morePopularBrandsData,
		ratingsChartData,
		topBrandsTimelineData,
		finishDateData
	};
};

export default normalizers;
