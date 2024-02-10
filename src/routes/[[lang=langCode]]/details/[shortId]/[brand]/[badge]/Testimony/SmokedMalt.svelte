<script lang="ts">
	import { isBoolean } from 'lodash-es';
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import Label from './atoms/Label.svelte';
	import Producer from './atoms/Producer.svelte';

	const { smokedMalt } = $derived($page.data.details);
</script>

{#if smokedMalt}
	<DT>
		{$LL.pages.details.testimony.smokedMalt()}
	</DT>
	<DD>
		{#if isBoolean(smokedMalt.label)}
			<Label>
				{smokedMalt.label ? $LL.global.confirmation() : $LL.global.denial()}
			</Label>
		{/if}
		{#if isBoolean(smokedMalt.producer)}
			<Producer>
				{smokedMalt.producer ? $LL.global.confirmation() : $LL.global.denial()}
			</Producer>
		{/if}
	</DD>
{/if}
