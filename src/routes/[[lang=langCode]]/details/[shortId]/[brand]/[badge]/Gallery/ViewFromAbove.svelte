<script lang="ts">
	import { slide } from 'svelte/transition';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { PHOTO_SERVER } from '$lib/utils/constants';

	const { badge, brand, photos, shortId } = $derived($page.data.details);
	const basicPath = $derived(`${PHOTO_SERVER}/${brand.badge}/${badge}/${shortId}`);
	let isOpened = $state(false);

	afterNavigate(() => {
		isOpened = false;
	});
</script>

{#if photos?.viewFromAbove}
	<button
		class="mb-2 mt-5 w-full bg-gray-100 p-1 text-base transition-colors hover:bg-gray-200"
		on:click={() => (isOpened = !isOpened)}
	>
		{isOpened
			? $LL.pages.details.gallery.viewFromAbove.hide()
			: $LL.pages.details.gallery.viewFromAbove.show()}
	</button>
	{#if isOpened}
		<div class="pb-2 lg:w-full lg:pt-0" transition:slide>
			<img
				alt={$LL.pages.details.gallery.viewFromAbove.title({ name: brand.name.value })}
				class="mx-auto h-[220px]"
				srcset="{basicPath}/view-from-above/webp/1x.webp 1x, {basicPath}/view-from-above/webp/2x.webp 2x"
				src="{basicPath}/view-from-above/jpg/1x.jpg"
				loading="lazy"
			/>
		</div>
	{/if}
{/if}
