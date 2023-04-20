<script lang="ts">
	import { PHOTO_SERVER } from '$lib/utils/constants';
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<svelte:head>
	<title>Land of Hop</title>
	<meta name="description" content={$LL.pages.home.description()} />
	<link rel="preconnect" href={PHOTO_SERVER} />
</svelte:head>

<h1>hi</h1>
