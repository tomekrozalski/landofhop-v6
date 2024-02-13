<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import StatsWrapper from '../../elements/Wrapper.svelte';
	import Navigation from './Navigation.svelte';

	const { data } = $props();
</script>

<svelte:head>
	<title>{$LL.pages.stats.ingredients.title()}</title>
</svelte:head>

<StatsWrapper>
	{#if data.statsData}
		<Navigation />
	{/if}
</StatsWrapper>
