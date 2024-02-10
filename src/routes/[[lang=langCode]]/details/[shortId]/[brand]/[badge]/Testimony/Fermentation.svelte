<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import Label from './atoms/Label.svelte';
	import Producer from './atoms/Producer.svelte';
	import Editorial from './atoms/Editorial.svelte';
	import FormattedList from '$lib/atoms/FormattedList.svelte';
	import type { Fermentation as FermentationEnum } from '$lib/db/enums/Beverage.enum';

	const { fermentation } = $derived($page.data.details);

	function getFermentetaionType(value: FermentationEnum) {
		return $LL.pages.details.testimony.fermentationType[value]();
	}
</script>

{#if fermentation}
	<DT>
		{$LL.pages.details.testimony.fermentation()}
	</DT>
	<DD>
		{#if fermentation.label}
			<FormattedList mode="short" let:item data={fermentation.label}>
				<Label>{getFermentetaionType(item)}</Label>
			</FormattedList>
		{/if}
		{#if fermentation.producer}
			<FormattedList mode="short" let:item data={fermentation.producer}>
				<Producer>{getFermentetaionType(item)}</Producer>
			</FormattedList>
		{/if}
		{#if fermentation.editorial}
			<FormattedList mode="short" let:item data={fermentation.editorial}>
				<Editorial>{getFermentetaionType(item)}</Editorial>
			</FormattedList>
		{/if}
	</DD>
{/if}
