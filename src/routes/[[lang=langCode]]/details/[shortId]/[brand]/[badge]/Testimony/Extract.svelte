<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import Label from './atoms/Label.svelte';
	import Producer from './atoms/Producer.svelte';

	$: ({ extract } = $page.data.details);
</script>

{#if extract}
	<DT>
		{$LL.pages.details.testimony.extract()}
	</DT>
	<DD>
		{#if extract.label}
			<Label>
				{$LL.pages.details.testimony.extractValue({
					...extract.label,
					value: new Intl.NumberFormat('pl').format(extract.label.value)
				})}
			</Label>
		{/if}
		{#if extract.producer}
			<Producer>
				{$LL.pages.details.testimony.extractValue({
					...extract.producer,
					value: new Intl.NumberFormat('pl').format(extract.producer.value)
				})}
			</Producer>
		{/if}
	</DD>
{/if}
