<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import type { AddTimelineBar } from '../utils/normalizers/Output.d';

	let {
		addTimelineData,
		selectedLine = $bindable()
	}: {
		addTimelineData: AddTimelineBar[];
		selectedLine: 'bottles' | 'cans' | 'total' | null;
	} = $props();
</script>

<ul class="mr-8 mt-4 flex justify-end">
	<li
		class="flex cursor-pointer items-center"
		onmouseenter={() => (selectedLine = 'total')}
		onmouseleave={() => (selectedLine = null)}
	>
		<i
			role="presentation"
			class="inline-block h-6 w-6 border-4 border-turquoise transition-colors lg:h-9 lg:w-9 lg:border-8"
			class:bg-turquoise={selectedLine === 'total'}
		></i>
		<div class="ml-3 text-sm leading-tight lg:text-lg">
			{$LL.pages.stats.landing.addTimeline.total()}
			<strong class="block text-sm lg:text-base">
				{addTimelineData.reduce((acc, { bottle, can }) => acc + bottle + can, 0)}
			</strong>
		</div>
	</li>
	<li
		class="ml-4 flex cursor-pointer items-center lg:ml-8"
		onmouseenter={() => (selectedLine = 'bottles')}
		onmouseleave={() => (selectedLine = null)}
	>
		<i
			role="presentation"
			class="inline-block h-6 w-6 border-4 border-green transition-colors lg:h-9 lg:w-9 lg:border-8"
			class:bg-green={selectedLine === 'bottles'}
		></i>
		<div class="ml-3 text-sm leading-tight lg:text-lg">
			{$LL.pages.stats.landing.addTimeline.bottles()}
			<strong class="block text-sm lg:text-base">
				{addTimelineData.reduce((acc, { bottle }) => acc + bottle, 0)}
			</strong>
		</div>
	</li>
	<li
		class="ml-4 flex cursor-pointer items-center lg:ml-8"
		onmouseenter={() => (selectedLine = 'cans')}
		onmouseleave={() => (selectedLine = null)}
	>
		<i
			role="presentation"
			class="inline-block h-6 w-6 border-4 border-yellow transition-colors lg:h-9 lg:w-9 lg:border-8"
			class:bg-yellow={selectedLine === 'cans'}
		></i>
		<div class="ml-3 text-sm leading-tight lg:text-lg">
			{$LL.pages.stats.landing.addTimeline.cans()}
			<strong class="block text-sm lg:text-base">
				{addTimelineData.reduce((acc, { can }) => acc + can, 0)}
			</strong>
		</div>
	</li>
</ul>
