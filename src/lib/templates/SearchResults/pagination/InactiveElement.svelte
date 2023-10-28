<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCaretLeft, faCaretRight } from '@fortawesome/pro-solid-svg-icons';

	export let label: string | undefined = undefined;
	export let name: string;
</script>

<li class="m-1 mx-3 w-full sm:m-1 sm:w-auto">
	<span
		class="flex h-14 w-full cursor-not-allowed items-center justify-center border-gray-300 bg-gray-300 px-4 py-2 text-center text-white
			sm:h-10
			lg:py-1
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
