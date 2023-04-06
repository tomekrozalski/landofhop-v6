<script>
	import { afterUpdate } from 'svelte';
	import layoutStore from './utils/store';
	// import SearchResults from './SearchResults/SearchResults.svelte';

	let path = '';

	afterUpdate(() => {
		const params = new URLSearchParams(window.location.search);
		let value = params.get('search') ?? '';
		layoutStore.setSearchPhrase(value);

		if (path !== window.location.pathname) {
			if (!window.location.search) {
				layoutStore.closeSearchBar();
			}

			path = window.location.pathname;
		}
	});
</script>

<main class="mt-80">
	{#if $layoutStore.isSearchbarActive}
		<div>@ToDo Search Results</div>
		<!-- <SearchResults /> -->
	{:else}
		<slot />
	{/if}
</main>

<style>
	main {
		/* margin-top: var(--size-header-height); */
		min-height: calc(100vh - var(--size-header-height));
		background-color: var(--color-white);
		z-index: var(--index-main);
		position: relative;
	}
</style>
