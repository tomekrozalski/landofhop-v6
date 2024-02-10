<script lang="ts">
	import type { RatingsChartBar } from '../utils/normalizers/Output.d';

	const { ratingsChartData, innerHeight, xScale, xValue, yScale, yValue } = $props<{
		ratingsChartData: RatingsChartBar[];
		innerHeight: number;
		xScale: any;
		xValue: (value: RatingsChartBar) => string;
		yScale: any;
		yValue: (value: RatingsChartBar) => number;
	}>();

	const filteredData = ratingsChartData.filter(({ beverages }) => beverages);

	function setHorintalPosition(bar: RatingsChartBar) {
		return xScale(xValue(bar) || '') - xScale.bandwidth() / 2;
	}

	function setVerticalPosition(bar: RatingsChartBar) {
		return yScale(yValue(bar));
	}
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
