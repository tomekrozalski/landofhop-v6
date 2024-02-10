<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import Label from './atoms/Label.svelte';
	import Producer from './atoms/Producer.svelte';
	import Editorial from './atoms/Editorial.svelte';
	import type { AlcoholScope } from '$lib/db/enums/Beverage.enum';

	const { alcohol } = $derived($page.data.details);

	function getScopeValue(value: AlcoholScope) {
		return $LL.pages.details.testimony.alcoholScope[value]();
	}
</script>

{#if alcohol}
	<DT>
		{$LL.pages.details.testimony.alcohol()}
	</DT>
	<DD>
		{#if alcohol.label}
			<Label>
				{$LL.pages.details.testimony.alcoholValue({
					...alcohol.label,
					value: new Intl.NumberFormat('pl').format(alcohol.label.value)
				})}
				{#if alcohol.label.scope}
					{getScopeValue(alcohol.label.scope)}
				{/if}
			</Label>
		{/if}
		{#if alcohol.producer}
			<Producer>
				{$LL.pages.details.testimony.alcoholValue({
					...alcohol.producer,
					value: new Intl.NumberFormat('pl').format(alcohol.producer.value)
				})}
				{#if alcohol.producer.scope}
					{getScopeValue(alcohol.producer.scope)}
				{/if}
			</Producer>
		{/if}
		{#if alcohol.editorial?.scope}
			<Editorial>
				{getScopeValue(alcohol.editorial.scope)}
			</Editorial>
		{/if}
	</DD>
{/if}
