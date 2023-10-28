<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCaretLeft, faCaretRight } from '@fortawesome/pro-solid-svg-icons';

	export let label: string | undefined = undefined;
	export let name: string;
</script>

<li class="m-3 w-full sm:m-1 sm:w-auto">
	<span
		class="flex h-full w-full cursor-not-allowed items-center border border-gray-300 bg-gray-300 p-3 text-center text-white
      sm:px-4 sm:py-2
      lg:px-3 lg:py-1
    "
		aria-label={label}
	>
		{#if name === 'previous'}
			<Fa icon={faCaretLeft} />
		{:else if name === 'next'}
			<Fa icon={faCaretRight} />
		{:else}
			{name}
		{/if}
	</span>
</li>
