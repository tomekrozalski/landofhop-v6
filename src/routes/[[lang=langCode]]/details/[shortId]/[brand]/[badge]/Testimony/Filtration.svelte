<script lang="ts">
	import { isBoolean } from 'lodash-es';
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import Label from './atoms/Label.svelte';
	import Producer from './atoms/Producer.svelte';
	import Editorial from './atoms/Editorial.svelte';

	const { filtration } = $derived($page.data.details);
</script>

{#if filtration}
	<DT>
		{$LL.pages.details.testimony.filtration()}
	</DT>
	<DD>
		{#if isBoolean(filtration.label)}
			<Label>
				{filtration.label ? $LL.global.confirmation() : $LL.global.denial()}
			</Label>
		{/if}
		{#if isBoolean(filtration.producer)}
			<Producer>
				{filtration.producer ? $LL.global.confirmation() : $LL.global.denial()}
			</Producer>
		{/if}
		{#if isBoolean(filtration.editorial)}
			<Editorial>
				{filtration.editorial ? $LL.global.confirmation() : $LL.global.denial()}
			</Editorial>
		{/if}
	</DD>
{/if}
