<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { PHOTO_SERVER } from '$lib/utils/constants';
	import type { ContainerType } from '$lib/db/enums/Beverage.enum';

	const { type }: { type: ContainerType } = $props();
</script>

<img
	alt={$LL.pages.listing.imageNotFound()}
	class="my-10 w-2/5 transition-transform group-hover:scale-90 group-focus:scale-90"
	src="{PHOTO_SERVER}/broken-{type}.svg"
/>
