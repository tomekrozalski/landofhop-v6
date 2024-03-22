<script lang="ts">
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	import LL from '$lib/i18n/i18n-svelte';

	let { children }: { children: Snippet } = $props();
	let isCollapsed = $state(false);
</script>

{#if isCollapsed}
	<div transition:slide class="overflow-clip">
		{#if children}
			{@render children()}
		{/if}
	</div>
{/if}
<button
	type="button"
	on:click={() => (isCollapsed = !isCollapsed)}
	class="text-green hover:underline"
>
	{#if isCollapsed}
		{$LL.pages.details.tale.readLess()}
	{:else}
		{$LL.pages.details.tale.readMore()}
	{/if}
</button>
