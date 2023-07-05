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
	class:border-b-4={isLabeled}
	class:font-medium={isLabeled}
	class:border-yellow-light={label}
	class:border-green-light={producer}
	class:border-sea-light={editorial}
	class:transition-all={isLink}
	class:hover:border-b-2={isLink}
	class:hover:border-black={isLink}
	lang={name.language && name.language !== $page.data.locale ? name.language : null}
	{...$$restProps}
>
	{name.value}
</svelte:element>
