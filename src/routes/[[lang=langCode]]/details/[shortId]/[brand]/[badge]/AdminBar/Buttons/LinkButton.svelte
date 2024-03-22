<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children, href }: { children: Snippet; href: string } = $props();
</script>

<a
	{href}
	class="flex h-10 items-center justify-center border-2 border-black bg-black px-6 text-white transition-colors hover:bg-white hover:text-black"
>
	{#if children}
		{@render children()}
	{/if}
</a>
