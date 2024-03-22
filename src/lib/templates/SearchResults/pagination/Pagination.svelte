<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { MAX_BEVERAGES_ON_PAGE } from '$lib/utils/constants';
	import ActiveElement from './ActiveElement.svelte';
	import InactiveElement from './InactiveElement.svelte';
	import getElements from './getElements';

	const { order, total }: { order: number; total: number } = $props();
	let pagesCount = Math.ceil(total / MAX_BEVERAGES_ON_PAGE);
	const pages = $derived(getElements(order, total));
</script>

<ul class="container my-16 flex flex-wrap justify-center xl:mb-20 xl:mt-32">
	{#if order === 1}
		<InactiveElement label={$LL.pages.search.pagination.previousPage()} name="previous" />
	{:else}
		<ActiveElement
			label={$LL.pages.search.pagination.previousPage()}
			name="previous"
			pageNumber={order - 1}
		/>
	{/if}
	{#each pages as pageNumber}
		{#if pageNumber}
			<ActiveElement isCurrent={pageNumber === order} name={pageNumber.toString()} {pageNumber} />
		{:else}
			<InactiveElement name="…" />
		{/if}
	{/each}
	{#if pagesCount === order}
		<InactiveElement label={$LL.pages.search.pagination.nextPage()} name="next" />
	{:else}
		<ActiveElement
			label={$LL.pages.search.pagination.nextPage()}
			name="next"
			pageNumber={order + 1}
		/>
	{/if}
</ul>
