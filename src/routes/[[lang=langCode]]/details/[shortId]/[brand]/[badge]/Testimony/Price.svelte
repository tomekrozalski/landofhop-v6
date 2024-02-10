<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import Label from './atoms/Label.svelte';
	import Producer from './atoms/Producer.svelte';
	import Editorial from './atoms/Editorial.svelte';
	import FormattedList from '$lib/atoms/FormattedList.svelte';

	const { price } = $derived($page.data.details);
</script>

{#if price}
	<DT>
		{$LL.pages.details.testimony.price()}
	</DT>
	<DD>
		{#if price.label}
			<Label>
				<FormattedList mode="narrow" let:item data={price.label}>
					{new Intl.NumberFormat('pl', {
						style: 'currency',
						currency: item.currency
					}).format(item.value)}
				</FormattedList>
			</Label>
		{/if}
		{#if price.producer}
			<Producer>
				<FormattedList mode="narrow" let:item data={price.producer}>
					{new Intl.NumberFormat('pl', {
						style: 'currency',
						currency: item.currency
					}).format(item.value)}
				</FormattedList>
			</Producer>
		{/if}
		{#if price.editorial}
			<Editorial>
				<FormattedList mode="narrow" let:item data={price.editorial}>
					{new Intl.NumberFormat('pl', {
						style: 'currency',
						currency: item.currency
					}).format(item.value)}
				</FormattedList>
			</Editorial>
		{/if}
	</DD>
{/if}
