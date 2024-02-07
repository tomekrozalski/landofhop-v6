<script lang="ts">
	import type LanguageValue from '$lib/db/types/LanguageValue.d';
	import { page } from '$app/stores';

	export let editorial: boolean = false;
	export let label: boolean = false;
	export let name: LanguageValue;
	export let producer: boolean = false;
	export let tag: string;

	$: isLabeled = editorial || label || producer;
	$: isLink = tag === 'a';
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
	{...$$restProps}
>
	{name.value}
</svelte:element>
