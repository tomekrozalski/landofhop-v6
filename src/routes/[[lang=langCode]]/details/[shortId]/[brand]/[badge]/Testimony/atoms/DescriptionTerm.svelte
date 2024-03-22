<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<dt class="after:content-[':'] lg:text-right">
	{#if children}
		{@render children()}
	{/if}
</dt>
