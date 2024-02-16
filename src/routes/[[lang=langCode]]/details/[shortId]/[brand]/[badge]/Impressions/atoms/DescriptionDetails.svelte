<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children } = $props<{ children: Snippet }>();
</script>

<dd class="flex basis-3/5 flex-col justify-center">
	{#if children}
		{@render children()}
	{/if}
</dd>
