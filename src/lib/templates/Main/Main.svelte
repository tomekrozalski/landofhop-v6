<script>
	import { afterUpdate } from 'svelte';
	import SearchResults from '$lib/templates/SearchResults/SearchResults.svelte';
	import layoutStore from './store';

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

<main>
	{#if $layoutStore.isSearchbarActive}
		<SearchResults />
	{:else}
		<slot />
	{/if}
</main>
