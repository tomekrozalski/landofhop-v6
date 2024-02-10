<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';
	import { PHOTO_SERVER } from '$lib/utils/constants';
</script>

<img
	alt={$LL.pages.details.gallery.imageNotFound()}
	class="my-10 h-64"
	src={`${PHOTO_SERVER}/broken-${$page.data.details.container.type}.svg`}
/>
