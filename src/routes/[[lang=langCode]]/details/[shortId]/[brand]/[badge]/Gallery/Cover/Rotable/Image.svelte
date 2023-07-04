<script lang="ts">
	import { page } from '$app/stores';
	import { PHOTO_SERVER } from '$lib/utils/constants';

	export let loaded: number;
	export let imageIndex: number;
	export let isVisible: boolean = false;

	$: ({ badge, brand, shortId } = $page.data.details);
	$: imagePathBase = `${PHOTO_SERVER}/${brand.badge}/${badge}/${shortId}/container/webp/${pixelRatio}`;
	const pixelRatio = window.devicePixelRatio && window.devicePixelRatio >= 1.5 ? '2x' : '1x';
</script>

<img
	alt=""
	src="{imagePathBase}/{imageIndex.toString().padStart(2, '0')}.webp"
	class="pointer-events-none absolute inset-0"
	class:visible={isVisible}
	class:invisible={!isVisible}
	on:load={() => (loaded = loaded + 1)}
/>
