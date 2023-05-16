<script lang="ts">
	import { PHOTO_SERVER } from '$lib/utils/constants';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Breadcrumbs from '$lib/atoms/Breadcrumbs.svelte';
	import BeverageList from '$lib/templates/BeverageList/BeverageList.svelte';
	import NoBeverageFound from '$lib/templates/BeverageList/NoBeverageFound.svelte';
	import Pagination from '$lib/templates/BeverageList/Pagination/Pagination.svelte';

	export let data;
</script>

<svelte:head>
	<title>Land of Hop</title>
	<meta name="description" content={$LL.pages.home.description()} />
	<link rel="preconnect" href={PHOTO_SERVER} />
</svelte:head>

<Breadcrumbs month={data.scope.month} year={data.scope.year} />
{#if data.beverages.length}
	<BeverageList beverages={data.beverages} />
{:else}
	<NoBeverageFound />
{/if}
<Pagination month={data.scope.month} year={data.scope.year} />
