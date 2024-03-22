<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<h1 class="mb-10 mt-5 text-center text-3xl font-bold">
	{#if children}
		{@render children()}
	{/if}
</h1>
