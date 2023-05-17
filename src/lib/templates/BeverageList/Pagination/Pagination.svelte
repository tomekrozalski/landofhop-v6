<script lang="ts">
	import NextLink from './NextLink.svelte';
	import { OLDEST_LIST } from '$lib/utils/constants';
	import PreviousLink from './PreviousLink.svelte';
	import TheMostRecent from './TheMostRecent.svelte';
	import TheOldest from './TheOldest.svelte';

	export let month: number;
	export let year: number;

	export let isTheMostRecent: boolean = false;
	$: isTheOldest = month === OLDEST_LIST.month && year === OLDEST_LIST.year;
</script>

<nav class="container flex justify-between px-3 pb-24">
	{#if isTheMostRecent}
		<TheMostRecent />
	{:else}
		<NextLink />
	{/if}
	{#if isTheOldest}
		<TheOldest />
	{:else}
		<PreviousLink />
	{/if}
</nav>
