<script lang="ts">
	import { page } from '$app/stores';
	import { PHOTO_SERVER } from '$lib/utils/constants';

	let {
		loaded,
		imageIndex,
		isVisible = false
	}: { loaded: number; imageIndex: number; isVisible?: boolean } = $props();
	const { badge, brand, shortId } = $derived($page.data.details);
	const pixelRatio = window.devicePixelRatio && window.devicePixelRatio >= 1.5 ? '2x' : '1x';
	const imagePathBase = $derived(
		`${PHOTO_SERVER}/${brand.badge}/${badge}/${shortId}/container/webp/${pixelRatio}`
	);
</script>

<img
	alt=""
	src="{imagePathBase}/{imageIndex.toString().padStart(2, '0')}.webp"
	class="pointer-events-none absolute inset-0"
	class:visible={isVisible}
	class:invisible={!isVisible}
	on:load={() => (loaded = loaded + 1)}
/>
