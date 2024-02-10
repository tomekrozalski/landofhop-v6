<script lang="ts">
	import { page } from '$app/stores';
	import Image from './Image.svelte';

	let { areImagesLoaded, image } = $props<{ areImagesLoaded: boolean; image: number }>();
	const imagesInGallery = $derived($page.data.details.photos.gallery);
	const imageIndexArray = $derived(new Array(imagesInGallery).fill('').map((_, i) => i + 1));

	let loaded = $state(0);

	$effect(() => {
		if (loaded === imagesInGallery) {
			areImagesLoaded = true;
		}
	});
</script>

{#each imageIndexArray as imageIndex}
	<Image {imageIndex} isVisible={[image, image - 1].includes(imageIndex)} bind:loaded />
{/each}
