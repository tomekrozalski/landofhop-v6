<script lang="ts">
	import Fa from 'svelte-fa';
	import { faSpinner } from 'pro-solid-svg-icons';

	export let isDelayed: boolean = false;
	export let isDisabled: boolean = false;
	export let type: 'button' | 'submit' | 'reset' = 'button';
</script>

<button
	class="relative h-10 border-2 border-black bg-black px-6 text-white transition-all"
	class:hover:bg-white={!isDisabled && !isDelayed}
	class:hover:text-black={!isDisabled && !isDelayed}
	class:cursor-not-allowed={isDelayed}
	class:bg-gray-300={isDelayed}
	class:border-gray-300={isDelayed}
	class:pl-4={isDelayed}
	class:pr-12={isDelayed}
	disabled={isDisabled || isDelayed}
	{type}
>
	<slot />
	{#if isDelayed}
		<Fa icon={faSpinner} class="absolute right-4 top-2.5 animate-spin" />
	{/if}
</button>
