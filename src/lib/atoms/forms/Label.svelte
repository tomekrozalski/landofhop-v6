<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		children,
		id,
		isRequired = false
	} = $props<{ children: Snippet; id: string; isRequired?: boolean }>();
</script>

<label for={id} class="h-10 w-full cursor-pointer text-right leading-10 after:content-[':']">
	{#if children}
		{@render children()}
	{/if}
	{#if isRequired}
		<span class="text-red">*</span>
	{/if}
</label>
