<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<article class="container px-3 pb-20 pt-3">
	{#if children}
		{@render children()}
	{/if}
</article>
