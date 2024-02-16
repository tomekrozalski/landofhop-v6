<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		children,
		tag = 'em',
		...rest
	} = $props<{ children: Snippet; tag?: string; [value: string]: unknown }>();
</script>

<svelte:element
	this={tag}
	class="skip-ink-none font-medium underline decoration-green-light decoration-8 -underline-offset-2"
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</svelte:element>
