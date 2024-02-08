<script lang="ts">
	import NextLink from './NextLink.svelte';
	import PreviousLink from './PreviousLink.svelte';
	import TheMostRecent from './TheMostRecent.svelte';
	import TheOldest from './TheOldest.svelte';

	type BreadcrumgsTypes = {
		link: string;
		phrase: string;
	};

	const { next, previous } = $props<{ next?: BreadcrumgsTypes; previous?: BreadcrumgsTypes }>();
</script>

<nav class="md:pb-23 container flex justify-between gap-5 px-3 pb-10">
	{#if next}
		<NextLink {...next} />
	{:else}
		<TheMostRecent />
	{/if}
	{#if previous}
		<PreviousLink {...previous} />
	{:else}
		<TheOldest />
	{/if}
</nav>
