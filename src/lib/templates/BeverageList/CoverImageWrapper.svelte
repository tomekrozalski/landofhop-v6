<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { PHOTO_SERVER } from '$lib/utils/constants';
	import IntersectionObserver from '$lib/utils/helpers/IntersectionObserver.svelte';
	import { toggleVisibility } from '$lib/utils/helpers/transitions';
	import CoverImage from './CoverImage.svelte';
	import type { Basics } from './Basics.d';

	const { beverage, eager }: { beverage: Basics; eager: boolean } = $props();
	const { badge, brand, name, coverImage, shortId } = $derived(beverage);

	let loaded = $state(false);
	let nativeLoading = $state(false);

	$effect(() => {
		if ('loading' in HTMLImageElement.prototype) {
			nativeLoading = true;
		}
	});
</script>

<a
	href={$LL.link(`/details/${beverage.shortId}/${beverage.brand.badge}/${beverage.badge}`)}
	style:aspect-ratio="{coverImage?.width} / {coverImage?.height}"
	aria-label="{name.value}, {brand.name.value}"
	class="group relative w-full focus-visible:z-10 focus-visible:outline-none focus-visible:outline-8 focus-visible:outline-black"
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
