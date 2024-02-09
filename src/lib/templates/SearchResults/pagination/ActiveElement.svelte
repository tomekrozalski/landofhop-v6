<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCaretLeft, faCaretRight } from '@fortawesome/pro-solid-svg-icons';
	import { page } from '$app/stores';

	const {
		isCurrent = false,
		label = '',
		name,
		pageNumber,
		...rest
	} = $props<{
		isCurrent?: boolean;
		label?: string;
		name: string;
		pageNumber: number;
		[key: string]: any;
	}>();

	const href = $derived(
		pageNumber === 1
			? '/search/' + $page.params.phrase
			: '/search/' + $page.params.phrase + '/' + pageNumber
	);
</script>

<li class="m-1 mx-3 w-full sm:m-1 sm:w-auto">
	<a
		class="flex h-14 w-full cursor-pointer items-center justify-center border-2 p-3 transition-colors
    hover:border-black hover:bg-white hover:text-black
		focus:outline-none focus-visible:border-black focus-visible:bg-white focus-visible:text-black
      sm:h-10 sm:px-4 sm:py-2
      lg:py-1
    "
		class:bg-black={isCurrent}
		class:bg-gray-100={!isCurrent}
		class:border-black={isCurrent}
		class:border-gray-300={!isCurrent}
		class:text-white={isCurrent}
		class:text-black={!isCurrent}
		{href}
		{...rest}
		aria-label={label}
	>
		{#if name === 'previous'}
			<Fa icon={faCaretLeft} />
		{:else if name === 'next'}
			<Fa icon={faCaretRight} />
		{:else}
			{name}
		{/if}
	</a>
</li>
