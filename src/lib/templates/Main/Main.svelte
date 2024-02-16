<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';
	import navigation from '$lib/templates/Main/navigation.svelte';
	import Spinner from '$lib/atoms/spinners/FullScreen.svelte';
	import { Status } from '$lib/db/enums/Globals.enum';
	import SearchResults from '../../../routes/[[lang=langCode]]/search/[phrase]/[[page]]/+page.svelte';

	let { children } = $props<{ children: Snippet }>();
</script>

<main>
	{#if navigation.isSearchbarActive}
		{#if navigation.searchStatus === Status.pending}
			<Spinner />
		{:else if navigation.searchStatus === Status.fulfilled && $page.state.selected}
			<SearchResults data={$page.state.selected} />
		{/if}
	{:else if children}
		{@render children()}
	{/if}
</main>
