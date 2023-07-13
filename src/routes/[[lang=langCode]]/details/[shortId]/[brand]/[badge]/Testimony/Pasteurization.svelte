<script lang="ts">
	import { isBoolean } from 'lodash-es';
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import Label from './atoms/Label.svelte';
	import Producer from './atoms/Producer.svelte';
	import Editorial from './atoms/Editorial.svelte';

	$: ({ pasteurization } = $page.data.details);
</script>

{#if pasteurization}
	<DT>
		{$LL.pages.details.testimony.pasteurization()}
	</DT>
	<DD>
		{#if isBoolean(pasteurization.label)}
			<Label>
				{pasteurization.label ? $LL.global.confirmation() : $LL.global.denial()}
			</Label>
		{/if}
		{#if isBoolean(pasteurization.producer)}
			<Producer>
				{pasteurization.producer ? $LL.global.confirmation() : $LL.global.denial()}
			</Producer>
		{/if}
		{#if isBoolean(pasteurization.editorial)}
			<Editorial>
				{pasteurization.editorial ? $LL.global.confirmation() : $LL.global.denial()}
			</Editorial>
		{/if}
	</DD>
{/if}
