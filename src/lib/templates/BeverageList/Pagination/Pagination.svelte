<script lang="ts">
	import NextLink from './NextLink.svelte';
	import PreviousLink from './PreviousLink.svelte';
	import TheMostRecent from './TheMostRecent.svelte';
	import TheOldest from './TheOldest.svelte';

	type BreadcrumbsTypes = {
		link: string;
		phrase: string;
	};

	[1, 2, 3].reduce((acc, curr) => {
		return acc + curr;
	});

	const { next, previous }: { next?: BreadcrumbsTypes; previous?: BreadcrumbsTypes } = $props();
</script>

<nav class="container flex justify-between gap-5 px-3 pb-10 md:pb-20">
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
