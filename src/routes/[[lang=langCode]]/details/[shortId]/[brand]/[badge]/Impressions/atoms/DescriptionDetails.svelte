<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<dd class="flex basis-3/5 flex-col justify-center">
	{#if children}
		{@render children()}
	{/if}
</dd>
