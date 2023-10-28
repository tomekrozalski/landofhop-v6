<script lang="ts">
	import { debounce } from 'lodash-es';
	import { LL } from '$lib/i18n/i18n-svelte';
	import layoutStore from '$lib/templates/Main/store';
	import { MAX_BEVERAGES_ON_PAGE } from '$lib/utils/constants';
	import pushState from '$lib/utils/helpers/pushState';
	import Spinner from '$lib/atoms/spinners/FullScreen.svelte';
	import BeverageList from '$lib/templates/BeverageList/BeverageList.svelte';
	import NoBeverageFound from '$lib/templates/BeverageList/NoBeverageFound.svelte';
	import type { Basics } from '$lib/templates/BeverageList/Basics.d';
	import Pagination from './pagination/Pagination.svelte';
	import AdvancedSearchLink from './AdvancedSearchLink.svelte';
	import Total from './Total.svelte';

	let order = 1;
	let value: string;

	async function callToApi(phrase: string, page: number) {
		const response = await fetch($LL.link(`/api/search/byPhrase/${phrase.trim()}/${page}`));
		const data: { beverages: Basics[]; total: number } = await response.json();

		return data;
	}

	const updateValue = debounce((newValue) => {
		const params = new URLSearchParams(location.search);
		params.delete('page');
		pushState(params);

		order = 1;
		value = newValue;
	}, 1000);

	$: updateValue($layoutStore.searchPhrase);

	function updateOrder() {
		const params = new URLSearchParams(location.search);
		order = params.get('page') ? Number(params.get('page')) : 1;
	}
</script>

<svelte:window on:popstate={updateOrder} />

<AdvancedSearchLink />

{#if value}
	{#await callToApi(value, order)}
		<Spinner />
	{:then { beverages, total }}
		{#if beverages.length}
			<Total currentPage={order} {total} inline />
			<BeverageList {beverages} />
			{#if total > MAX_BEVERAGES_ON_PAGE}
				<Pagination {order} {total} />
			{/if}
		{:else}
			<NoBeverageFound />
		{/if}
	{/await}
{/if}
