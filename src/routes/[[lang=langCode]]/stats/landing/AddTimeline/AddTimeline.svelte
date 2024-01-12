<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { scaleBand, scaleLinear } from 'd3-scale';
	import { max } from 'd3-array';
	import { page } from '$app/stores';
	import TimelineWrapper from '../../elements/TimelineWrapper/TimelineWrapper.svelte';
	import type { Sizes } from '../../utils/Charts';
	import type { AddTimelineBar } from '../utils/normalizers/Output.d';
	import Bars from './Bars.svelte';
	import Line from './Line.svelte';
	import Legend from './Legend.svelte';

	const { addTimelineData } = $page.data.stats;

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

	const xValue = (d: AddTimelineBar) => d.date;

	const xScale = scaleBand()
		.domain(addTimelineData.map(xValue))
		.range([0, innerWidth])
		.padding(0.1);

	// Define vertical scale

	const total = (d: AddTimelineBar) => d.bottle + d.can;
	const highestValue = (max(addTimelineData, total) || 0) + 3;

	const yScale = scaleLinear().domain([0, highestValue]).range([innerHeight, 0]);

	let isBarSelected = false;
	let selectedLine: 'bottles' | 'cans' | 'total' | null = null;
</script>

<h2 class="mb-5 mt-10 border-b border-gray-200 pb-2 text-xl font-bold">
	{$LL.pages.stats.landing.addTimeline.name()}
</h2>

<TimelineWrapper {highestValue} let:intersecting {sizes}>
	<Bars
		{addTimelineData}
		{innerWidth}
		{innerHeight}
		{xScale}
		{xValue}
		{yScale}
		{selectedLine}
		bind:isBarSelected
	/>
	{#if intersecting}
		<Line {addTimelineData} {xScale} {xValue} {yScale} bind:selectedLine {isBarSelected} />
	{/if}
</TimelineWrapper>

<Legend {addTimelineData} bind:selectedLine />
