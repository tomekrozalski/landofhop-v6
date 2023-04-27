<script lang="ts">
	import StatusIndicator from './StatusIndicator.svelte';

	export let classNames: string = '';
	export let errors: string;
	export let focusOnMount: boolean = false;
	export let handleChange: (e: Event) => void;
	export let id: string | null = null;
	export let isDisabled: boolean = false;
	export let isTextarea: boolean = false;
	export let isTouched: boolean;
	export let fieldName: string;
	export let onEnter: () => void | null = () => null;
	export let type: 'email' | 'number' | 'password' | 'text' = 'text';

	export let value: string | null;
	$: disabled = isDisabled || value === null;

	const dispatchKeydown = (e: Event) => {
		const event = e as KeyboardEvent;

		if (onEnter && event.key === 'Enter') {
			event.preventDefault();
			onEnter();
		}
	};

	const listenOnKeydown = (node: HTMLInputElement | HTMLTextAreaElement) => {
		node.addEventListener('keydown', dispatchKeydown);

		return {
			destroy() {
				node.removeEventListener('keydown', dispatchKeydown);
			}
		};
	};

	const focus = (node: HTMLInputElement | HTMLTextAreaElement) => {
		if (focusOnMount) {
			node.focus();
		}
	};
</script>

<StatusIndicator {classNames} {isTouched} isValid={!errors}>
	{#if isTextarea}
		<textarea
			class="h-32 w-full border-b-2 border-b-gray-200 bg-gray-100 px-2 text-lg leading-10 focus:border-b-black focus:outline-none"
			class:isTouched
			{disabled}
			{id}
			name={fieldName}
			on:change={handleChange}
			use:focus
			use:listenOnKeydown
			{value}
		/>
	{:else}
		<input
			class="h-10 w-full border-b-2 border-b-gray-300 bg-gray-100 px-2 text-lg leading-10 focus:border-b-black focus:outline-none"
			class:isTouched
			{disabled}
			{id}
			name={fieldName}
			use:focus
			use:listenOnKeydown
			{type}
			on:change={handleChange}
			{value}
		/>
	{/if}
	{#if errors}
		<span class="absolute left-0 right-0 top-full z-10 bg-yellow-light px-4 py-2 text-sm">
			{errors}
		</span>
	{/if}
</StatusIndicator>

<style>
	input,
	textarea {
		display: block;
		/* width: 100%; */
		/* height: var(--size-input-height); */
		/* border: 0; */
		/* border-bottom: 1px solid var(--color-grey-2); */
		/* padding: 0 1rem; */
		/* background-color: var(--color-grey-4); */
		/* font: var(--font-weight-light) 1.8rem / 1 var(--font-primary); */
		/* color: var(--color-black); */
	}

	textarea {
		/* height: 12rem; */
		padding: 0.6rem 1rem;
		line-height: 2.6rem;
	}

	input:disabled,
	textarea:disabled {
		border-bottom: none;
		background-color: var(--color-grey-5);
		color: var(--color-grey-2);
		cursor: not-allowed;
		-moz-appearance: textfield;
	}

	textarea:disabled {
		resize: none;
	}
</style>
