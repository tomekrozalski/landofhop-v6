<script lang="ts">
	import type { AlcoholChartBar } from '../utils/normalizers/Output.d';
	import Info from './Info.svelte';

	const { alcoholChartData, innerHeight, xScale, xValue, yScale, yValue } = $props<{
		alcoholChartData: AlcoholChartBar[];
		innerHeight: number;
		xScale: any;
		xValue: (value: AlcoholChartBar) => string;
		yScale: any;
		yValue: (value: AlcoholChartBar) => number;
	}>();

	const filteredData: AlcoholChartBar[] = alcoholChartData.filter(({ beverages }) => beverages);

	const totalBeverages = filteredData.reduce((acc, { beverages }) => acc + beverages, 0);
	const alcoholicBeverages = filteredData
		.filter(({ value }) => value > 0.5)
		.reduce((acc, { beverages }) => acc + beverages, 0);
	const totalAlcohol = filteredData.reduce((acc, curr) => acc + curr.beverages * curr.value, 0);
	const totalAlcoholWithoutNonAlcoholicBeverages = filteredData
		.filter(({ value }) => value > 0.5)
		.reduce((acc, curr) => acc + curr.beverages * curr.value, 0);
	const average = +(totalAlcohol / totalBeverages).toPrecision(2);
	const averageWithoutNonAlcoholicBeverages = +(
		totalAlcoholWithoutNonAlcoholicBeverages / alcoholicBeverages
	).toPrecision(2);

	let isBarLabelVisible = $state(false);
	let activeBar = $state<AlcoholChartBar>();

	function showLabel(e: Event) {
		isBarLabelVisible = true;
		const index = Number((e.target as SVGElement).dataset.index);
		activeBar = filteredData[index];
	}

	function hideLabel() {
		isBarLabelVisible = false;
	}

	function setHorintalPosition(bar: AlcoholChartBar) {
		return xScale(xValue(bar) || '') - xScale.bandwidth() / 2;
	}

	function setVerticalPosition(bar: AlcoholChartBar) {
		return yScale(yValue(bar));
	}
</script>

<g>
	{#each filteredData as bar, index}
		<rect
			data-index={index}
			width={xScale.bandwidth() - 1}
			height={innerHeight - yScale(yValue(bar))}
			x={setHorintalPosition(bar)}
			y={setVerticalPosition(bar)}
			class="cursor-pointer fill-green"
			class:fill-red={bar.value === average}
			class:fill-sea={bar.value === averageWithoutNonAlcoholicBeverages}
			on:focus={showLabel}
			on:mouseover={showLabel}
			on:mouseleave={hideLabel}
			role="presentation"
		/>
	{/each}
</g>
{#if isBarLabelVisible && activeBar}
	<Info
		average={activeBar.value === average}
		averageWithoutNonAlcoholicBeverages={activeBar.value === averageWithoutNonAlcoholicBeverages}
		bandwidth={xScale.bandwidth()}
		bar={activeBar}
		x={setHorintalPosition(activeBar)}
		y={setVerticalPosition(activeBar)}
	/>
{/if}
