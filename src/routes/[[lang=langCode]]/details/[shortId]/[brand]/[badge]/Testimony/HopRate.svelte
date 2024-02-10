<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import Label from './atoms/Label.svelte';
	import Producer from './atoms/Producer.svelte';

	const { hopRate } = $derived($page.data.details);
</script>

{#if hopRate}
	<DT>
		{$LL.pages.details.testimony.hopRate()}
	</DT>
	<DD>
		{#if hopRate.label}
			<Label>
				{$LL.pages.details.testimony.hopRateValue(hopRate.label)}
			</Label>
		{/if}
		{#if hopRate.producer}
			<Producer>
				{$LL.pages.details.testimony.hopRateValue(hopRate.producer)}
			</Producer>
		{/if}
	</DD>
{/if}
