<script lang="ts">
	import { page } from '$app/stores';
	import NextLink from './NextLink.svelte';
	import PreviousLink from './PreviousLink.svelte';
	import TheMostRecent from './TheMostRecent.svelte';
	import TheOldest from './TheOldest.svelte';

	export let isTheMostRecent: boolean = false;
</script>

<nav class="md:pb-23 container flex justify-between gap-5 px-3 pb-10">
	{#if isTheMostRecent}
		<TheMostRecent />
	{:else}
		<NextLink />
	{/if}
	{#if $page.data.isTheOldest}
		<TheOldest />
	{:else}
		<PreviousLink />
	{/if}
</nav>
