<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<dt class="basis-2/5 pr-2 text-right first-letter:uppercase after:content-[':']">
	{#if children}
		{@render children()}
	{/if}
</dt>
