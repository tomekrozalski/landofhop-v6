<script lang="ts">
	import { page } from '$app/stores';
	import List from './List.svelte';
	import ToggleBox from './ToggleBox.svelte';
	import type { IngredientsStats as IngredientsStatsTypes } from './types.d';

	// export let onUpdateClick: (badge: string) => void;
	const onUpdateClick = (badge: string) => {
		console.log('badge', badge);
	};

	const data: IngredientsStatsTypes = $derived($page.data.statsData);
</script>

<p class="my-5">
	Lista składników oraz liczba ich wystąpień w piwach w bazie danych. Posortowane od
	najpopularniejszych do najmniej popularnych.
</p>

<ul class="ml-1 px-5">
	<li class="relative">
		{data.tree.name.value} <span>({data.tree.occurrences.withSuccessors})</span>
		{#if data.tree.successors}
			<ToggleBox badge={data.tree.badge} />
			<List data={data.tree.successors} level={2} {onUpdateClick} />
		{/if}
	</li>
</ul>
