<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import Label from './atoms/Label.svelte';
	import Producer from './atoms/Producer.svelte';
	import Editorial from './atoms/Editorial.svelte';
	import MarkLanguage from '$lib/atoms/MarkLanguage.svelte';
	import FormattedList from '$lib/atoms/FormattedList.svelte';

	const { dryHopped, isDryHopped } = $derived($page.data.details);
</script>

{#if dryHopped || isDryHopped}
	<DT>
		{$LL.pages.details.testimony.dryHopped()}
	</DT>
	<DD>
		{#if isDryHopped?.label}
			<Label>{$LL.global.confirmation()}</Label>
		{/if}
		{#if dryHopped?.label}
			<Label>
				<FormattedList mode="short" data={dryHopped.label}>
					{#snippet formattedList(item)}
						<MarkLanguage label tag="em" name={item.name} />
					{/snippet}
				</FormattedList>
			</Label>
		{/if}
		{#if isDryHopped?.producer}
			<Producer>{$LL.global.confirmation()}</Producer>
		{/if}
		{#if dryHopped?.producer}
			<Producer>
				<FormattedList mode="short" data={dryHopped.producer}>
					{#snippet formattedList(item)}
						<MarkLanguage producer tag="em" name={item.name} />
					{/snippet}
				</FormattedList>
			</Producer>
		{/if}
		{#if isDryHopped?.editorial}
			<Editorial>{$LL.global.confirmation()}</Editorial>
		{/if}
		{#if dryHopped?.editorial}
			<Editorial>
				<FormattedList mode="short" data={dryHopped.editorial}>
					{#snippet formattedList(item)}
						<MarkLanguage editorial tag="em" name={item.name} />
					{/snippet}
				</FormattedList>
			</Editorial>
		{/if}
	</DD>
{/if}
