<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import type { AddTimelineBar } from '../utils/normalizers/Output.d';

	export let addTimelineData: AddTimelineBar[];
	export let selectedLine: 'bottles' | 'cans' | 'total' | null;
</script>

<ul class="mr-8 flex justify-end">
	<li
		class="flex cursor-pointer items-center"
		class:highlighted={selectedLine === 'total'}
		on:mouseenter={() => (selectedLine = 'total')}
		on:mouseleave={() => (selectedLine = null)}
	>
		<i
			role="presentation"
			class="inline-block h-6 w-6 border-4 border-orange lg:h-9 lg:w-9 lg:border-8"
		></i>
		<div class="ml-3">
			{$LL.pages.stats.landing.addTimeline.total()}
			<strong class="block text-base">
				{addTimelineData.reduce((acc, { bottle, can }) => acc + bottle + can, 0)}
			</strong>
		</div>
	</li>
	<li
		class="ml-4 flex cursor-pointer items-center lg:ml-8"
		class:highlighted={selectedLine === 'bottles'}
		on:mouseenter={() => (selectedLine = 'bottles')}
		on:mouseleave={() => (selectedLine = null)}
	>
		<i
			role="presentation"
			class="inline-block h-6 w-6 border-4 border-orange lg:h-9 lg:w-9 lg:border-8"
		></i>
		<div class="ml-3">
			{$LL.pages.stats.landing.addTimeline.bottles()}
			<strong class="block">
				{addTimelineData.reduce((acc, { bottle }) => acc + bottle, 0)}
			</strong>
		</div>
	</li>
	<li
		class="ml-4 flex cursor-pointer items-center lg:ml-8"
		class:highlighted={selectedLine === 'cans'}
		on:mouseenter={() => (selectedLine = 'cans')}
		on:mouseleave={() => (selectedLine = null)}
	>
		<i
			role="presentation"
			class="inline-block h-6 w-6 border-4 border-orange lg:h-9 lg:w-9 lg:border-8"
		></i>
		<div class="ml-3">
			{$LL.pages.stats.landing.addTimeline.cans()}
			<strong class="block">
				{addTimelineData.reduce((acc, { can }) => acc + can, 0)}
			</strong>
		</div>
	</li>
</ul>

<style>
	.total.highlighted::before {
		background-color: var(--color-brand-8);
	}

	.bottles.highlighted::before {
		background-color: var(--color-brand-6);
	}

	.cans.highlighted::before {
		background-color: var(--color-brand-5);
	}
</style>
