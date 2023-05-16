<script lang="ts">
	import NextLink from './NextLink.svelte';
	import PreviousLink from './PreviousLink.svelte';
	import TheMostRecent from './TheMostRecent.svelte';
	import TheOldest from './TheOldest.svelte';

	export let month: number;
	export let year: number;

	export let isTheMostRecent: boolean = false;
	$: isTheOldest = month === 6 && year === 2017;
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
