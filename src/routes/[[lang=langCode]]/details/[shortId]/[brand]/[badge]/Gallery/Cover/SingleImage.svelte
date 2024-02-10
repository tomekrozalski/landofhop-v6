<script lang="ts">
	import { PHOTO_SERVER } from '$lib/utils/constants';
	import { page } from '$app/stores';

	const { badge, brand, name, shortId } = $page.data.details;
	const basicPath = `${PHOTO_SERVER}/${brand.badge}/${badge}/${shortId}`;
	const pathWebpRegular = `${basicPath}/container/webp/1x/01.webp`;
	const pathWebpLarge = `${basicPath}/container/webp/2x/01.webp`;

	let { loaded } = $props<{ loaded: boolean }>();

	function loadListener(image: HTMLImageElement) {
		image.onload = () => {
			loaded = true;
		};

		image.srcset = image.dataset.srcset as string;
		image.src = image.dataset.src as string;
	}
</script>

<img
	alt={loaded ? `${name.value}, ${brand.name.value}` : ''}
	class="absolute inset-0"
	class:invisible={!loaded}
	data-srcset="{pathWebpRegular} 1x, {pathWebpLarge} 2x"
	data-src={pathWebpRegular}
	use:loadListener
/>

<noscript>
	<img
		alt={loaded ? `${name.value}, ${brand.name.value}` : ''}
		class="absolute inset-0"
		srcset="{pathWebpRegular} 1x, {pathWebpLarge} 2x"
		src={pathWebpRegular}
	/>
</noscript>
