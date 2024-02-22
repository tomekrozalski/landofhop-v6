<script lang="ts" generics="T extends Record<string, unknown>">
	import type { Snippet } from 'svelte';
	import type { FormPathLeaves } from 'sveltekit-superforms';
	import cn from '$lib/utils/cn';

	const {
		children,
		class: classNames,
		field,
		formId,
		isRequired = false
	} = $props<{
		children: Snippet;
		class?: string;
		field: FormPathLeaves<T>;
		formId: string;
		isRequired?: boolean;
	}>();
</script>

<label
	for={formId + '-' + field}
	class={cn("h-10 w-full cursor-pointer text-right leading-10 after:content-[':']", classNames)}
>
	{@render children()}
	{#if isRequired}
		<span class="text-red">*</span>
	{/if}
</label>
