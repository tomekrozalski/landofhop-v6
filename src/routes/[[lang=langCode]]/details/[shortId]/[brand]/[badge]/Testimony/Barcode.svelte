<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import Label from './atoms/Label.svelte';

	$: ({ barcode } = $page.data.details);
</script>

{#if barcode}
	<DT>{$LL.pages.details.testimony.barcode()}</DT>
	<DD><Label>{barcode}</Label></DD>
{/if}
