<script lang="ts">
	import { PHOTO_SERVER } from '$lib/utils/constants';
	import Breadcrumbs from '$lib/atoms/Breadcrumbs.svelte';
	import BeverageDetails from './BeverageDetails.svelte';

	export let data;
	$: ({ breadcrumbs, details } = data);
</script>

<svelte:head>
	<title>🍻 {details.brand.name.value}, {details.name.value}</title>
	<link rel="preconnect" href={PHOTO_SERVER} />
</svelte:head>

<Breadcrumbs link={breadcrumbs.link} phrase={breadcrumbs.phrase} />
<BeverageDetails />
