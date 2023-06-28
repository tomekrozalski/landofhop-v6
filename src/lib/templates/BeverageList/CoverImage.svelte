<script lang="ts">
	import { PHOTO_SERVER } from '$lib/utils/constants';
	import type { Basics } from './Basics.d';

	export let beverage: Basics;
	export let eager: boolean;
	export let loaded: boolean;

	$: getPath = (size: 1 | 2) => {
		const basicPath = `${PHOTO_SERVER}/${beverage.brand.badge}/${beverage.badge}/${beverage.shortId}`;
		return `${basicPath}/cover/webp/${size}x.webp`;
	};

	function loadListener(image: HTMLImageElement) {
		image.onload = () => {
			loaded = true;
		};
	}
</script>

<img
	alt={loaded || eager ? `${beverage.name.value}, ${beverage.brand.name.value}` : ''}
	class="absolute transition-transform group-hover:scale-90 group-focus:scale-90"
	srcset="{getPath(1)} 1x, {getPath(2)} 2x"
	src={getPath(1)}
	class:loaded
	use:loadListener
	loading={eager ? 'eager' : 'lazy'}
/>
