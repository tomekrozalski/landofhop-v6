<script lang="ts">
	import type { Snippet } from 'svelte';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Navigation from './Navigation.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<article class="container mb-20">
	<h1 class="pb-5 pt-10 text-center text-3xl font-bold">{$LL.pages.stats.common.name()}</h1>
	<Navigation />
	{#if children}
		{@render children()}
	{/if}
</article>
