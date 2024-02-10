<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import Label from './atoms/Label.svelte';
	import Producer from './atoms/Producer.svelte';
	import Editorial from './atoms/Editorial.svelte';

	const { place } = $derived($page.data.details);
</script>

{#if place}
	<DT>{$LL.pages.details.testimony.country()}</DT>
	<DD>
		{#if place.label}
			<Label>{place.label.country}</Label>
		{/if}
		{#if place.producer}
			<Producer>{place.producer.country}</Producer>
		{/if}
		{#if place.editorial}
			<Editorial>{place.editorial.country}</Editorial>
		{/if}
	</DD>
{/if}
