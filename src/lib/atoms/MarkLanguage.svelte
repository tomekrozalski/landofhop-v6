<script lang="ts">
	import type LanguageValue from '$lib/db/types/LanguageValue.d';
	import { page } from '$app/stores';

	let {
		editorial = false,
		label = false,
		name,
		producer = false,
		tag,
		...rest
	} = $props<{
		editorial?: boolean;
		label?: boolean;
		name: LanguageValue;
		producer?: boolean;
		tag: string;
		[value: string]: unknown;
	}>();

	const isLabeled = $derived(editorial || label || producer);
	const isLink = $derived(tag === 'a');
</script>

<svelte:element
	this={tag}
	class:underline={isLabeled}
	class:decoration-8={isLabeled}
	class:font-medium={isLabeled}
	class:skip-ink-none={isLabeled}
	class:-underline-offset-2={isLabeled}
	class:decoration-yellow-light={label}
	class:decoration-green-light={producer}
	class:decoration-sea-light={editorial}
	class:transition-all={isLink}
	class:hover:decoration-2={isLink}
	class:hover:decoration-black={isLink}
	class:hover:underline-offset-4={isLink}
	class:hover:skip-ink-auto={isLink}
	lang={name.language && name.language !== $page.data.locale ? name.language : null}
	{...rest}
>
	{name.value}
</svelte:element>
