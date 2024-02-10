<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import Label from './atoms/Label.svelte';
	import Producer from './atoms/Producer.svelte';

	const { temperature } = $derived($page.data.details);
</script>

{#if temperature}
	<DT>
		{$LL.pages.details.testimony.temperature()}
	</DT>
	<DD>
		{#if temperature.label}
			<Label>
				{#if temperature.label.from === temperature.label.to}
					{temperature.label.from}
				{:else}
					{temperature.label.from}-{temperature.label.to}
				{/if}
				{$LL.pages.details.testimony.temperatureUnit(temperature.label.unit)}
			</Label>
		{/if}
		{#if temperature.producer}
			<Producer>
				{#if temperature.producer.from === temperature.producer.to}
					{temperature.producer.from}
				{:else}
					{temperature.producer.from}-{temperature.producer.to}
				{/if}
				{$LL.pages.details.testimony.temperatureUnit(temperature.producer.unit)}
			</Producer>
		{/if}
	</DD>
{/if}
