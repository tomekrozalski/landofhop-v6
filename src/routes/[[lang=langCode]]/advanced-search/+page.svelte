<script lang="ts">
	import { onMount } from 'svelte';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Spinner from '$lib/atoms/spinners/FullScreen.svelte';
	import navigation from '$lib/templates/Main/navigation.svelte';
	import type AdvancedSearchData from './AdvancedSearchData.d';

	let mounted = $state(false);
	let initialValues: AdvancedSearchData = $state({
		brands: null,
		ingredientTags: null,
		name: null,
		page: null,
		styleTags: null
	});

	onMount(async () => {
		navigation.closeSearchBar();

		const params = new URLSearchParams(location.search);
		initialValues.brands = params.get('brands')?.split(',') ?? null;
		initialValues.ingredientTags = params.get('ingredientTags')?.split(',') ?? null;
		initialValues.name = params.get('name') ?? null;
		initialValues.page = params.get('page') ? Number(params.get('page')) : null;
		initialValues.styleTags = params.get('styleTags')?.split(',') ?? null;

		mounted = true;
	});
</script>

<svelte:head>
	<title>{$LL.pages.advancedSearch.title()}</title>
</svelte:head>

<h1 class="mt-10">{$LL.pages.advancedSearch.title()}</h1>
{#if mounted}
	<!-- <Form {initialValues} /> -->
	<div>Form: {JSON.stringify(initialValues)}</div>
	<!-- <Results data={initialValues} /> -->
	<div>Results: {JSON.stringify(initialValues)}</div>
{:else}
	<Spinner />
{/if}
