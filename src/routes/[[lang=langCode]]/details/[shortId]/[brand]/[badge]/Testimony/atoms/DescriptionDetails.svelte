<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<dd class="mb-3 self-end lg:col-span-2 lg:mb-0">
	{#if children}
		{@render children()}
	{/if}
</dd>
