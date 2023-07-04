<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';
	import { PHOTO_SERVER } from '$lib/utils/constants';
</script>

<img
	alt={$LL.details.gallery.imageNotFound()}
	class="my-10 h-64"
	src={`${PHOTO_SERVER}/broken-${$page.data.details.container.type}.svg`}
/>

<style>
	/* img { */
	/* height: 28rem;
		margin: 4rem 0; */
	/* transform: scale(1); */
	/* transition: transform var(--transition-default); */
	/* fill: var(--color-grey-3); */
	/* } */
</style>
