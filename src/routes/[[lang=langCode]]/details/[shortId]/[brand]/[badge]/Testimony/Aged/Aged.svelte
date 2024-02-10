<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from '../atoms/DescriptionDetails.svelte';
	import DT from '../atoms/DescriptionTerm.svelte';
	import Label from '../atoms/Label.svelte';
	import Producer from '../atoms/Producer.svelte';
	import Editorial from '../atoms/Editorial.svelte';
	import FormattedList from '$lib/atoms/FormattedList.svelte';
	import AgedItem from './AgedItem.svelte';

	const { aged, isAged } = $derived($page.data.details);
</script>

{#if aged || isAged}
	<DT>
		{$LL.pages.details.testimony.aged.title()}
	</DT>
	<DD>
		{#if isAged?.label}
			<Label>{$LL.global.confirmation()}</Label>
		{/if}
		{#if aged?.label}
			<Label>
				<FormattedList mode="long" let:item data={aged.label}>
					<AgedItem {item} />
				</FormattedList>
			</Label>
		{/if}
		{#if isAged?.producer}
			<Producer>{$LL.global.confirmation()}</Producer>
		{/if}
		{#if aged?.producer}
			<Producer>
				<FormattedList mode="long" let:item data={aged.producer}>
					<AgedItem {item} />
				</FormattedList>
			</Producer>
		{/if}
		{#if isAged?.editorial}
			<Editorial>{$LL.global.confirmation()}</Editorial>
		{/if}
		{#if aged?.editorial}
			<Editorial>
				<FormattedList mode="long" let:item data={aged.editorial}>
					<AgedItem {item} />
				</FormattedList>
			</Editorial>
		{/if}
	</DD>
{/if}
