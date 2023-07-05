<script lang="ts">
	import { slide } from 'svelte/transition';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { PHOTO_SERVER } from '$lib/utils/constants';

	$: ({ badge, brand, photos, shortId } = $page.data.details);
	$: basicPath = `${PHOTO_SERVER}/${brand.badge}/${badge}/${shortId}`;

	let isOpened = false;

	afterNavigate(() => {
		isOpened = false;
	});
</script>

{#if photos?.viewFromAbove}
	<button
		class="mt-5 w-full bg-gray-100 p-1 text-base transition-colors hover:bg-gray-200 lg:mb-3"
		on:click={() => (isOpened = !isOpened)}
	>
		{isOpened
			? $LL.pages.details.gallery.viewFromAbove.hide()
			: $LL.pages.details.gallery.viewFromAbove.show()}
	</button>
	{#if isOpened}
		<div class="aspect-square w-full" transition:slide>
			<img
				alt={$LL.pages.details.gallery.viewFromAbove.title({ name: brand.name.value })}
				srcset="{basicPath}/view-from-above/webp/1x.webp 1x, {basicPath}/view-from-above/webp/2x.webp 2x"
				src="{basicPath}/view-from-above/jpg/1x.jpg"
				loading="lazy"
			/>
		</div>
	{/if}
{/if}
