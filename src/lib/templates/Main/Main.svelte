<script>
	import { page } from '$app/stores';
	import SearchResults from '../../../routes/[[lang=langCode]]/search/[phrase]/[[page]]/+page.svelte';
</script>

<main>
	{#if $page.state.selected}
		<SearchResults data={$page.state.selected} />
	{:else}
		<slot />
	{/if}
</main>
