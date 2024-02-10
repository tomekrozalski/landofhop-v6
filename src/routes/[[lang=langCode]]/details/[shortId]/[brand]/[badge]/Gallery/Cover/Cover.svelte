<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { toggleVisibility } from '$lib/utils/helpers/transitions';
	import SingleImage from './SingleImage.svelte';
	import Rotable from './Rotable/Rotable.svelte';
	import BrokenContainer from './BrokenContainer.svelte';

	let isRotableGalleryVisible = $state(false);
	let loaded = $state(false);

	onMount(() => {
		setTimeout(() => {
			isRotableGalleryVisible = true;
		}, 1500);
	});
</script>

<section
	class="details-gallery relative mx-auto mt-4 flex h-[500px] w-[220px] items-center justify-center lg:mt-0"
>
	{#if $page.data.details.photos?.gallery}
		{#if !loaded && $page.data.details.photos.outline}
			<span class="outline-wrapper" transition:toggleVisibility>
				{@html $page.data.details.photos.outline.replace('<svg ', '<svg class="absolute inset-0"')}
			</span>
		{:else if isRotableGalleryVisible}
			<Rotable />
		{/if}
		<SingleImage bind:loaded />
	{:else}
		<BrokenContainer />
	{/if}
</section>
