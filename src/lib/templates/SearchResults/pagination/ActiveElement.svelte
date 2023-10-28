<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCaretLeft, faCaretRight } from '@fortawesome/pro-solid-svg-icons';
	import pushState from '$lib/utils/helpers/pushState';

	export let isCurrent: boolean = false;
	export let label: string | undefined = undefined;
	export let name: string;
	export let page: number;

	const handleClick = () => {
		const params = new URLSearchParams(location.search);

		if (page === 1) {
			params.delete('page');
		} else {
			params.set('page', page.toString());
		}

		pushState(params);
	};
</script>

<li class="m-1 mx-3 w-full sm:m-1 sm:w-auto">
	<button
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
		on:click={handleClick}
		{...$$restProps}
		aria-label={label}
	>
		{#if name === 'previous'}
			<Fa icon={faCaretLeft} />
		{:else if name === 'next'}
			<Fa icon={faCaretRight} />
		{:else}
			{name}
		{/if}
	</button>
</li>
