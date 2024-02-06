<script lang="ts">
	import type { RatingsChartBar } from '../utils/normalizers/Output.d';

	export let ratingsChartData: RatingsChartBar[];
	export let innerHeight: number;
	export let xScale: any;
	export let xValue: (value: RatingsChartBar) => string;
	export let yScale: any;
	export let yValue: (value: RatingsChartBar) => number;

	const filteredData = ratingsChartData.filter(({ beverages }) => beverages);
	const setHorintalPosition = (bar: RatingsChartBar) =>
		xScale(xValue(bar) || '') - xScale.bandwidth() / 2;
	const setVerticalPosition = (bar: RatingsChartBar) => yScale(yValue(bar));
</script>

<g>
	{#each filteredData as bar}
		<rect
			class="fill-sea"
			width={xScale.bandwidth()}
			height={innerHeight - yScale(yValue(bar))}
			x={setHorintalPosition(bar)}
			y={setVerticalPosition(bar)}
		/>
	{/each}
</g>
