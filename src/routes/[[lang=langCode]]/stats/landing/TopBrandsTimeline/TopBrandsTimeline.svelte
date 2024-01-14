<script lang="ts">
	import { scaleBand, scaleLinear } from 'd3-scale';
	import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';
	import TimelineWrapper from '../../elements/TimelineWrapper/TimelineWrapper.svelte';
	import type { Sizes } from '../../utils/Charts.d';
	import type { TopBrandsTimelineBar } from '../utils/normalizers/Output.d';
	import Line from './Line.svelte';
	import Legend from './Legend.svelte';
	// import Points from './Points.svelte';

	const { morePopularBrandsData, topBrandsTimelineData } = $page.data.stats;

	const sizes: Sizes = {
		width: 1160,
		height: 600,
		margin: {
			top: 40,
			right: 20,
			bottom: 60,
			left: 100
		}
	};

	const { height, margin, width } = sizes;
	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;

	// Define horizontal scale

	const xValue = (d: TopBrandsTimelineBar) => d.date;

	const xScale = scaleBand()
		.domain(topBrandsTimelineData.map(xValue))
		.range([0, innerWidth])
		.padding(0.1);

	// Define vertical scale

	const highestValue = Math.max(
		...topBrandsTimelineData[topBrandsTimelineData.length - 1].brands.map(({ amount }) => amount)
	);

	const yScale = scaleLinear()
		.domain([0, highestValue + 3])
		.range([innerHeight, 0]);

	let selectedBrand: string | null = null;
</script>

<h2 class="mx-5 mb-5 mt-10 border-b border-gray-200 pb-2 text-xl font-bold lg:mx-0">
	{$LL.pages.stats.landing.topBrandsTimeline.name()}
</h2>

<TimelineWrapper highestValue={highestValue + 3} let:intersecting {sizes}>
	{#if intersecting}
		<Line {topBrandsTimelineData} {xScale} {xValue} {yScale} bind:selectedBrand />
		<!-- <Points {topBrandsTimelineData} {xScale} {yScale} bind:selectedBrand /> -->
	{/if}
</TimelineWrapper>

<Legend {morePopularBrandsData} {topBrandsTimelineData} bind:selectedBrand />
