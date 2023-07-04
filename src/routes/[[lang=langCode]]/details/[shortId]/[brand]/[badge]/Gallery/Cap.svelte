<script lang="ts">
	import { slide } from 'svelte/transition';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';
	import { PHOTO_SERVER } from '$lib/utils/constants';

	$: ({ badge, brand, photos, shortId } = $page.data.details);
	$: basicPath = `${PHOTO_SERVER}/${brand.badge}/${badge}/${shortId}`;

	let isOpened = false;
</script>

{#if photos?.cap}
	<button
		class="mb-3 mt-5 w-full bg-gray-100 p-1 text-base transition-colors hover:bg-gray-200"
		on:click={() => (isOpened = !isOpened)}
	>
		{isOpened ? $LL.details.gallery.cap.hide() : $LL.details.gallery.cap.show()}
	</button>
	{#if isOpened}
		<div class="aspect-square w-full" transition:slide>
			<img
				alt={$LL.details.gallery.cap.title({ name: brand.name.value })}
				class="w-full"
				srcset="{basicPath}/cap/webp/1x.webp 1x, {basicPath}/cap/webp/2x.webp 2x"
				src="{basicPath}/cap/jpg/1x.jpg"
				loading="lazy"
			/>
		</div>
	{/if}
{/if}
