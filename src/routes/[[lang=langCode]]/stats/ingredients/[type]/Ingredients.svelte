<script lang="ts">
	import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';
	import List from './List.svelte';
	import ToggleBox from './ToggleBox.svelte';
	import type { IngredientsStats } from './types.d';

	const data: IngredientsStats = $derived($page.data.statsData);
</script>

<p class="m-5 text-pretty lg:mx-0">
	{$LL.pages.stats.ingredients.info()}
</p>

<ul class="ml-5 px-5 lg:ml-1">
	<li class="relative">
		{data.tree.name.value}
		<span class="text-sm text-gray-400">({data.tree.occurrences.withSuccessors})</span>
		{#if data.tree.successors}
			<ToggleBox badge={data.tree.badge} />
			<List data={data.tree.successors} />
		{/if}
	</li>
</ul>
