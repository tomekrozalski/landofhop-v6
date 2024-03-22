<script lang="ts">
	import { fade } from 'svelte/transition';
	import { LL } from '$lib/i18n/i18n-svelte';
	import type { AlcoholChartBar } from '../utils/normalizers/Output.d';

	const {
		average,
		averageWithoutNonAlcoholicBeverages,
		bandwidth,
		bar,
		x,
		y
	}: {
		average: boolean;
		averageWithoutNonAlcoholicBeverages: boolean;
		bandwidth: number;
		bar: AlcoholChartBar;
		x: number;
		y: number;
	} = $props();

	function getTextWidth() {
		const textElement = document.getElementById('alcohol-chart-bar-label');
		return textElement.getBBox().width;
	}

	function calculateWidth(node: SVGRectElement) {
		node.style = `width: ${getTextWidth() + 20}px`;
	}

	const calculateHorizontalPosition = () =>
		bar.value > 18 ? x - getTextWidth() - bandwidth * 2 - 10 - 2 : x + bandwidth + 1;

	const calculateVerticalPosition = () => (bar.beverages < 3 ? y - 15 : y);

	function calculatePosition(node: SVGGElement) {
		node.style = `transform: translate(${calculateHorizontalPosition()}px, ${calculateVerticalPosition()}px)`;
	}
</script>

<g use:calculatePosition in:fade>
	<rect use:calculateWidth height="20" class="fill-black" />
	<text id="alcohol-chart-bar-label" x="10" y="15" class="fill-white text-xs">
		{$LL.pages.stats.landing.alcohol.barLabel({
			beverages: bar.beverages,
			value: Intl.NumberFormat('pl').format(bar.value)
		})}
		{#if average}
			{' - '}
			{$LL.pages.stats.landing.alcohol.isAverage()}
		{/if}
		{#if averageWithoutNonAlcoholicBeverages}
			{' - '}
			{$LL.pages.stats.landing.alcohol.isAverageWithoutNonAlcoholicBeverages()}
		{/if}
	</text>
</g>
