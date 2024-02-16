<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children, last } = $props<{ children: Snippet; last: boolean }>();
</script>

<li
	class="list-inside list-disc marker:text-sm after:mr-1 after:content-[',']"
	class:after:content-none={last}
>
	{#if children}
		{@render children()}
	{/if}
</li>
