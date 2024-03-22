<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="my-4 grid gap-2">
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	div {
		grid-template-columns: 1fr 30px 1fr 10%;
	}
</style>
