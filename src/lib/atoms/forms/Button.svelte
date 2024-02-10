<script lang="ts">
	import Fa from 'svelte-fa';
	import { faSpinner } from '@fortawesome/pro-solid-svg-icons';

	const {
		isDelayed = false,
		isDisabled = false,
		isSecondary = false,
		isWarning = false,
		type = 'button',
		...rest
	} = $props<{
		isDelayed?: boolean;
		isDisabled?: boolean;
		isSecondary?: boolean;
		isWarning?: boolean;
		type?: 'button' | 'submit' | 'reset';
		[value: string]: unknown;
	}>();
</script>

<button
	class="relative h-10 border-2 border-black px-6 text-white transition-all"
	class:bg-black={!isSecondary && !isWarning}
	class:bg-sea={isSecondary}
	class:bg-red-light={isWarning}
	class:border-black={!isSecondary && !isWarning}
	class:border-sea={isSecondary}
	class:border-red-light={isWarning}
	class:hover:bg-white={!isDisabled && !isDelayed && !isSecondary && !isWarning}
	class:hover:bg-sea-light={isSecondary}
	class:hover:bg-red={isWarning}
	class:hover:border-sea-light={isSecondary}
	class:hover:border-red={isWarning}
	class:hover:text-black={!isDisabled && !isDelayed && !isWarning}
	class:cursor-not-allowed={isDelayed}
	class:bg-gray-300={isDelayed}
	class:border-gray-300={isDelayed}
	class:pl-4={isDelayed}
	class:pr-12={isDelayed}
	disabled={isDisabled || isDelayed}
	{...rest}
	{type}
>
	<slot />
	{#if isDelayed}
		<Fa icon={faSpinner} class="absolute right-4 top-2.5 animate-spin" />
	{/if}
</button>
