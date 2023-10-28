<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCaretLeft, faCaretRight } from '@fortawesome/pro-solid-svg-icons';

	export let href: string;
	export let isCurrent: boolean = false;
	export let label: string | undefined = undefined;
	export let name: string;
</script>

<li class="m-3 w-full sm:m-1 sm:w-auto">
	<a
		class="flex h-full w-full cursor-pointer items-center border p-3 text-center transition-colors
    hover:bg-white hover:text-black
      sm:px-4 sm:py-2
      lg:px-3 lg:py-1
    "
		class:bg-black={isCurrent}
		class:bg-gray-100={!isCurrent}
		class:border-black={isCurrent}
		class:border-gray-300={!isCurrent}
		class:text-white={isCurrent}
		class:text-black={!isCurrent}
		{href}
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
	</a>
</li>
