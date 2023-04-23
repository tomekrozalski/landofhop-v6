<script lang="ts">
	import Icon from '$lib/atoms/Icon.svelte';

	export let handleClick: (e: Event) => void = () => {};
	export let isIrreversible: boolean = false;
	export let isSecondary: boolean = false;
	export let isSubmitting: boolean = false;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
</script>

<button
	class="relative h-10 border-2 border-black bg-black px-6 text-white transition-all"
	class:isIrreversible
	class:isSecondary
	class:hover:bg-white={!disabled && !isSubmitting}
	class:hover:text-black={!disabled && !isSubmitting}
	class:cursor-not-allowed={isSubmitting}
	class:bg-gray-300={isSubmitting}
	class:border-gray-300={isSubmitting}
	class:pl-4={isSubmitting}
	class:pr-12={isSubmitting}
	disabled={disabled || isSubmitting}
	on:click={handleClick}
	{type}
>
	<span><slot /></span>
	{#if isIrreversible}
		DatabaseIcon
		<!-- <DatabaseIcon /> -->
	{/if}
	{#if isSubmitting}
		<Icon name="spinner" style="solid" class="absolute right-4 top-2.5 animate-spin" />
	{/if}
</button>

<style>
	button.isIrreversible {
		padding-right: 3.4rem;
	}

	button.isIrreversible :global(.icon-database) {
		height: 3rem;
		fill: var(--color-grey-3);
		transition: fill var(--transition-default);
		position: absolute;
		top: -0.4rem;
		right: -0.2rem;
	}

	button:disabled {
		/* background-color: var(--color-grey-2); */
		/* color: var(--color-grey-4); */
		/* cursor: not-allowed; */
	}

	button.isSecondary {
		background-color: var(--color-brand-10);
	}

	/* button.isSubmitting { */
	/* padding: 0 1rem 0 1.5rem; */
	/* background-color: var(--color-grey-2); */
	/* cursor: not-allowed; */
	/* } */

	button.isWarning {
		background-color: var(--color-danger);
	}

	/* button:hover:not(:disabled):not(.isSubmitting):not(.isSecondary):not(.isIrreversible) {
		background-color: var(--color-grey-2);
		color: var(--color-black);
	}

	button.isIrreversible:not(.isSubmitting):hover {
		background-color: var(--color-grey-4);
		color: var(--color-black);
	}

	button.isIrreversible:not(.isSubmitting):hover :global(.icon-database) {
		fill: var(--color-black);
	} */

	button.isSecondary:hover {
		background-color: var(--color-brand-10-light);
		color: var(--color-black);
	}

	span {
		white-space: nowrap;
	}

	span::first-letter {
		text-transform: capitalize;
	}
</style>
