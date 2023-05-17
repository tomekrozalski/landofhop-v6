<script lang="ts">
	import { onMount } from 'svelte';
	import { PHOTO_SERVER } from '$lib/utils/constants';
	import IntersectionObserver from '$lib/utils/helpers/IntersectionObserver.svelte';
	import { toggleVisibility } from '$lib/utils/helpers/transitions';
	import CoverImage from './CoverImage.svelte';
	import type { Basics } from './Basics.d';

	export let beverage: Basics;
	export let eager: boolean;
	const { badge, brand, name, coverImage, shortId } = beverage;

	let loaded = false;
	let nativeLoading = false;

	onMount(() => {
		if ('loading' in HTMLImageElement.prototype) {
			nativeLoading = true;
		}
	});
</script>

<a
	href="/details/{beverage.shortId}/{beverage.brand.badge}/{beverage.badge}"
	style:aspect-ratio="{coverImage?.width} / {coverImage?.height}"
	aria-label="{name.value}, {brand.name.value}"
	class="group relative w-full focus:border-8 focus:border-black focus:outline-none"
>
	{#if !eager && !nativeLoading && !loaded && coverImage?.outline}
		<span transition:toggleVisibility>
			{@html coverImage.outline.replace('<svg', '<svg class="absolute inset-0"')}
		</span>
	{/if}
	{#if eager || nativeLoading}
		<CoverImage {beverage} {eager} bind:loaded />
	{:else}
		<IntersectionObserver once={true} let:intersecting>
			{#if intersecting}
				<CoverImage {beverage} {eager} bind:loaded />
			{/if}
		</IntersectionObserver>
		<noscript>
			<picture>
				<img
					alt="{name.value}, {brand.name.value}"
					class="absolute inset-0 opacity-100"
					src="{PHOTO_SERVER}/{brand.badge}/{badge}/{shortId}/cover/jpg/1x.jpg"
				/>
			</picture>
		</noscript>
	{/if}
</a>
