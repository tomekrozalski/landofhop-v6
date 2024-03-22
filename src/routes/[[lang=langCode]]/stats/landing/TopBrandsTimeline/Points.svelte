<script lang="ts">
	import { fade } from 'svelte/transition';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { format } from 'date-fns';
	import pl from 'date-fns/locale/pl/index.js';
	import type { Brand, TopBrandsTimelineBar } from '../utils/normalizers/Output.d';

	let {
		selectedBrand,
		topBrandsTimelineData,
		xScale,
		yScale
	}: {
		selectedBrand: string | null;
		topBrandsTimelineData: TopBrandsTimelineBar[];
		xScale: any;
		yScale: any;
	} = $props();
	let selectedDate = $state<string | null>();

	function getSelectedDateVelue() {
		const selectedDateData = topBrandsTimelineData.find(
			({ date }) => date === selectedDate
		) as TopBrandsTimelineBar;
		const selectedDateBrand = selectedDateData.brands.find(
			({ id }) => id === selectedBrand
		) as Brand;

		return selectedDateBrand.amount;
	}
</script>

<g style="transform: translate({Math.round(xScale.bandwidth() / 2)}px, 0">
	{#each topBrandsTimelineData as { brands, date }}
		{#each brands.filter(({ amount }) => amount) as { amount, id }, index}
			<circle
				class="cursor-pointer fill-white transition-opacity"
				class:opacity-0={selectedBrand && selectedBrand !== id}
				class:stroke-red={index === 0}
				class:stroke-orange={index === 1}
				class:stroke-yellow={index === 2}
				class:stroke-green={index === 3}
				class:stroke-sea={index === 4}
				class:stroke-turquoise={index === 5}
				class:stroke-red-light={index === 6}
				class:stroke-gray-600={index === 7}
				class:stroke-gray-400={index === 8}
				class:stroke-gray-300={index === 9}
				cx={xScale(date)}
				cy={yScale(amount)}
				r="3"
				in:fade={{ delay: 200 }}
				on:mouseenter={() => {
					selectedBrand = id;
					selectedDate = date;
				}}
				on:mouseleave={() => {
					selectedBrand = null;
					selectedDate = null;
				}}
				role="presentation"
			/>
		{/each}
	{/each}
</g>
{#if selectedBrand && selectedDate}
	<text x="200" y="20" text-anchor="middle">
		{$LL.pages.stats.landing.topBrandsTimeline.valueLabel({
			date: format(new Date(selectedDate), 'LLLL yyyy', { locale: pl }),
			value: getSelectedDateVelue()
		})}
	</text>
{/if}
