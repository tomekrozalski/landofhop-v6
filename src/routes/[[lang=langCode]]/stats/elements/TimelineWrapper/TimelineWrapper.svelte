<script lang="ts">
	import { format } from 'date-fns';
	import { scaleBand, scaleLinear } from 'd3-scale';
	import IntersectionObserver from '$lib/utils/helpers/IntersectionObserver.svelte';
	import generateMonthList from '../../utils/generateMonthList';
	import type { Sizes, YearMonth } from '../../utils/Charts';
	import Xaxis from './XAxis.svelte';
	import Yaxis from './YAxis.svelte';

	const {
		highestValue = 10,
		startDate = {
			month: 6,
			year: 2017
		},
		finishDate = {
			month: Number(format(new Date(), 'MM')),
			year: Number(format(new Date(), 'yyyy'))
		},
		sizes
	}: {
		highestValue?: number;
		startDate?: YearMonth;
		finishDate?: YearMonth;
		sizes: Sizes;
	} = $props();

	const { height, margin, width } = sizes;
	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;

	// Define horizontal scale

	const dateList = generateMonthList({ startDate, finishDate });
	const xValue = (d: Date) => format(d, 'yyyy-MM');
	const xScale = scaleBand().domain(dateList.map(xValue)).range([0, innerWidth]).padding(0.1);

	// Define vertical scale
	const yScale = scaleLinear().domain([0, highestValue]).range([innerHeight, 0]);
</script>

<IntersectionObserver once={true} let:intersecting threshold={1}>
	<svg viewBox="0 0 {width} {height}">
		<g style="transform: translate({margin.left}px, {margin.top}px)">
			<Xaxis {innerHeight} {xScale} />
			<Yaxis {innerWidth} {yScale} ticks={highestValue > 5 ? 6 : 3} />
			<slot {intersecting} />
		</g>
	</svg>
</IntersectionObserver>
