<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		children,
		classNames = '',
		link,
		label,
		underlined = false
	}: {
		children: Snippet;
		classNames?: string;
		link: string;
		label: string;
		underlined?: boolean;
	} = $props();
</script>

<li class="flex">
	<a
		class="flex w-full items-center p-2 px-4 transition-colors
		hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none
		md:w-auto md:px-2 {classNames}"
		href={link}
	>
		{#if children}
			{@render children()}
		{/if}
		{#if underlined}
			<span class="border-b border-gray-300">{label}</span>
		{:else}
			{label}
		{/if}
	</a>
</li>
