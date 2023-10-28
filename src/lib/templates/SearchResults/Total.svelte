<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { MAX_BEVERAGES_ON_PAGE } from '$lib/utils/constants';

	export let currentPage: number;
	export let inline: boolean = false;
	export let total: number;
	let pages = Math.ceil(total / MAX_BEVERAGES_ON_PAGE);
</script>

<section class:content-start={inline} class="container flex content-between gap-5 px-3">
	<div class="py-5">
		{$LL.global.foundCount()}
		<strong class="ml-1 inline-block bg-green px-2 font-normal leading-relaxed text-white">
			{total}
		</strong>
	</div>
	{#if pages > 1}
		<div class="py-5">
			{$LL.pages.search.pagination.page()}:
			<strong class="ml-1 inline-block bg-green px-2 font-normal leading-relaxed text-white">
				{currentPage} / {pages}
			</strong>
		</div>
	{/if}
</section>
