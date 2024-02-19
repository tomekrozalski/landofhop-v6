<script lang="ts">
	import type { Snippet } from 'svelte';
	import cn from '$lib/utils/cn';

	const {
		children,
		class: classNames,
		id,
		isRequired = false
	} = $props<{ children: Snippet; class?: string; id: string; isRequired?: boolean }>();
</script>

<label
	for={id}
	class={cn("h-10 w-full cursor-pointer text-right leading-10 after:content-[':']", classNames)}
>
	{#if children}
		{@render children()}
	{/if}
	{#if isRequired}
		<span class="text-red">*</span>
	{/if}
</label>
