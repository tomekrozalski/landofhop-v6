<script lang="ts">
	import { page } from '$app/stores';
	import { MAX_BEVERAGES_ON_PAGE } from '$lib/utils/constants';
	import BeverageList from '$lib/templates/BeverageList/BeverageList.svelte';
	import NoBeverageFound from '$lib/templates/BeverageList/NoBeverageFound.svelte';
	import type { Basics } from '$lib/templates/BeverageList/Basics.d';
	import Pagination from './pagination/Pagination.svelte';
	import AdvancedSearchLink from './AdvancedSearchLink.svelte';
	import Total from './Total.svelte';

	const { data }: { data: { beverages: Basics[]; total: number } } = $props();
	const { beverages, total } = $derived(data);
	const order = $derived(
		parseInt($page.state?.selected?.page?.toString() ?? $page.params.page ?? 1)
	);
</script>

<AdvancedSearchLink />

{#if beverages.length}
	<Total currentPage={order} {total} inline />
	<BeverageList {beverages} />
	{#if total > MAX_BEVERAGES_ON_PAGE}
		<Pagination {order} {total} />
	{/if}
{:else}
	<NoBeverageFound />
{/if}
