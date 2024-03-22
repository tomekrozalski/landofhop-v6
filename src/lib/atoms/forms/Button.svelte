<script lang="ts">
	import type { Snippet } from 'svelte';
	import Fa from 'svelte-fa';
	import { faSpinner } from '@fortawesome/pro-solid-svg-icons';
	import cn from '$lib/utils/cn';

	const {
		children,
		class: classNames,
		isDelayed = false,
		isDisabled = false,
		isSecondary = false,
		isWarning = false,
		type = 'button',
		...rest
	}: {
		children: Snippet;
		class?: string;
		isDelayed?: boolean;
		isDisabled?: boolean;
		isSecondary?: boolean;
		isWarning?: boolean;
		type?: 'button' | 'submit' | 'reset';
		[value: string]: unknown;
	} = $props();
</script>

<button
	class={cn(
		'relative h-10 border-2 border-black px-6 text-white transition-all',
		!isSecondary && !isWarning && 'border-black bg-black',
		isSecondary && 'border-sea bg-sea hover:border-sea-light hover:bg-sea-light',
		isWarning && 'border-red-light bg-red-light hover:border-red hover:bg-red',
		!isDisabled && !isDelayed && !isSecondary && !isWarning && 'hover:bg-white',
		!isDisabled && !isDelayed && !isWarning && 'hover:text-black',
		isDelayed && 'cursor-not-allowed border-gray-300 bg-gray-300 pl-4 pr-12',
		classNames
	)}
	disabled={isDisabled || isDelayed}
	{...rest}
	{type}
>
	{@render children()}
	{#if isDelayed}
		<Fa icon={faSpinner} class="absolute right-4 top-2.5 animate-spin" />
	{/if}
</button>
