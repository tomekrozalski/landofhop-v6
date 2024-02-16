<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children } = $props<{ children: Snippet }>();
</script>

<dt class="after:content-[':'] lg:text-right">
	{#if children}
		{@render children()}
	{/if}
</dt>
