<script lang="ts">
	import NextLink from './NextLink.svelte';
	import PreviousLink from './PreviousLink.svelte';
	import TheMostRecent from './TheMostRecent.svelte';
	import TheOldest from './TheOldest.svelte';

	export let month: number;
	export let year: number;
	export let isTheMostRecent: boolean = false;
	const isTheOldest = month === 6 && year === 2017;
</script>

<nav class="container mb-24 flex justify-between px-3">
	{#if isTheMostRecent}
		<TheMostRecent />
	{:else}
		<NextLink {month} {year} />
	{/if}
	{#if isTheOldest}
		<TheOldest />
	{:else}
		<PreviousLink {month} {year} />
	{/if}
</nav>
