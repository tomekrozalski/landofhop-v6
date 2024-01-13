<script lang="ts">
	import type { AlcoholChartBar } from '../utils/normalizers/Output.d';
	import Info from './Info.svelte';

	export let alcoholChartData: AlcoholChartBar[];
	export let innerHeight: number;
	export let xScale: any;
	export let xValue: (value: AlcoholChartBar) => string;
	export let yScale: any;
	export let yValue: (value: AlcoholChartBar) => number;

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

	let isBarLabelVisible = false;
	let activeBar: AlcoholChartBar;

	const showLabel = (e: Event) => {
		isBarLabelVisible = true;
		const index = Number((e.target as SVGElement).dataset.index);
		activeBar = filteredData[index];
	};

	const hideLabel = () => {
		isBarLabelVisible = false;
	};

	const setHorintalPosition = (bar: AlcoholChartBar) =>
		xScale(xValue(bar) || '') - xScale.bandwidth() / 2;

	const setVerticalPosition = (bar: AlcoholChartBar) => yScale(yValue(bar));
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
{#if isBarLabelVisible}
	<Info
		average={activeBar.value === average}
		averageWithoutNonAlcoholicBeverages={activeBar.value === averageWithoutNonAlcoholicBeverages}
		bandwidth={xScale.bandwidth()}
		bar={activeBar}
		x={setHorintalPosition(activeBar)}
		y={setVerticalPosition(activeBar)}
	/>
{/if}
