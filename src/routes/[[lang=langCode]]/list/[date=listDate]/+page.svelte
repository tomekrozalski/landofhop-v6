<script lang="ts">
	import { PHOTO_SERVER } from '$lib/utils/constants';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Breadcrumbs from '$lib/atoms/Breadcrumbs.svelte';
	import BeverageList from '$lib/templates/BeverageList/BeverageList.svelte';
	import NoBeverageFound from '$lib/templates/BeverageList/NoBeverageFound.svelte';
	import Pagination from '$lib/templates/BeverageList/Pagination/Pagination.svelte';

	const { data } = $props();
	const { beverages, breadcrumbs } = $derived(data);
</script>

<svelte:head>
	<title>{$LL.pages.listing.title({ month: breadcrumbs.phrase })}</title>
	<meta name="description" content={$LL.pages.home.description()} />
	<link rel="preconnect" href={PHOTO_SERVER} />
</svelte:head>

<Breadcrumbs phrase={breadcrumbs.phrase} />
<h1 class="sr-only">{$LL.pages.listing.title({ month: breadcrumbs.phrase })}</h1>
{#if beverages.length}
	<BeverageList {beverages} />
{:else}
	<NoBeverageFound />
{/if}
<Pagination next={breadcrumbs.next} previous={breadcrumbs.previous} />
