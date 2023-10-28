<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { MAX_BEVERAGES_ON_PAGE } from '$lib/utils/constants';
	import ActiveElement from './ActiveElement.svelte';
	import InactiveElement from './InactiveElement.svelte';
	import getElements from './getElements';

	export let order: number;
	export let total: number;
	let pagesCount = Math.ceil(total / MAX_BEVERAGES_ON_PAGE);

	$: pages = getElements(order, total);
</script>

<ul class="container my-16 flex flex-wrap justify-center xl:mb-20 xl:mt-32">
	{#if order === 1}
		<InactiveElement label={$LL.pages.search.pagination.previousPage()} name="previous" />
	{:else}
		<ActiveElement
			href={$LL.link(order > 2 ? `/list/${order - 1}` : '/')}
			label={$LL.pages.search.pagination.previousPage()}
			name="previous"
		/>
	{/if}
	{#each pages as page}
		{#if page}
			<ActiveElement
				isCurrent={page === order}
				href={$LL.link(page === 1 ? '/' : `/list/${page}`)}
				name={page.toString()}
			/>
		{:else}
			<InactiveElement name="…" />
		{/if}
	{/each}
	{#if pagesCount === order}
		<InactiveElement label={$LL.pages.search.pagination.nextPage()} name="next" />
	{:else}
		<ActiveElement
			href={$LL.link(`/list/${order + 1}`)}
			label={$LL.pages.search.pagination.nextPage()}
			name="next"
		/>
	{/if}
</ul>
