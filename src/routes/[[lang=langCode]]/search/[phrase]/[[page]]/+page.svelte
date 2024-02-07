<script lang="ts">
	import { page } from '$app/stores';
	import { PHOTO_SERVER } from '$lib/utils/constants';
	import { LL } from '$lib/i18n/i18n-svelte';
	import SearchResults from '$lib/templates/SearchResults/SearchResults.svelte';

	export let data;
</script>

<svelte:head>
	<title>
		{$LL.pages.search.title({ phrase: $page.params.phrase, page: $page.params.page ?? 1 })}
	</title>
	<link rel="preconnect" href={PHOTO_SERVER} />
</svelte:head>

<SearchResults {data} />
