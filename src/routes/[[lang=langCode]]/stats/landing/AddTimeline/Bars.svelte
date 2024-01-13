<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { format } from 'date-fns';
	import pl from 'date-fns/locale/pl/index.js';
	import type { AddTimelineBar } from '../utils/normalizers/Output.d';

	export let addTimelineData: AddTimelineBar[];
	export let isBarSelected: boolean = false;
	export let innerHeight: number;
	export let innerWidth: number;
	export let selectedLine: 'bottles' | 'cans' | 'total' | null;
	export let xScale: any;
	export let xValue: (value: AddTimelineBar) => string;
	export let yScale: any;

	const bottles = (d: AddTimelineBar) => d.bottle;
	const cans = (d: AddTimelineBar) => d.can;
	const total = (d: AddTimelineBar) => d.bottle + d.can;

	let info: AddTimelineBar | null = null;

	const showInfo = (bar: AddTimelineBar) => {
		info = { ...bar, date: format(new Date(bar.date), 'LLLL yyyy', { locale: pl }) };
		isBarSelected = true;
	};

	const hideInfo = () => {
		info = null;
		isBarSelected = false;
	};
</script>

<g class="opacity-100" class:opacity-30={!!selectedLine}>
	{#each addTimelineData as bar}
		<g
			class="cursor-pointer opacity-20 hover:opacity-100"
			style="transform: translate({xScale(xValue(bar)) || ''}px, {yScale(total(bar))}px)"
			on:mouseenter={() => showInfo(bar)}
			on:mouseleave={() => hideInfo()}
			role="presentation"
		>
			<rect
				class="fill-yellow"
				width={xScale.bandwidth()}
				height={innerHeight - yScale(cans(bar))}
			/>
			<rect
				class="fill-green"
				width={xScale.bandwidth()}
				height={innerHeight - yScale(bottles(bar))}
				y={innerHeight - yScale(cans(bar))}
			/>
		</g>
	{/each}
	{#if info}
		<text x={innerWidth / 2} y="-10" text-anchor="middle">
			{$LL.pages.stats.landing.addTimeline.depiction(info)}
		</text>
	{/if}
</g>
