<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';
	import Progress from './atoms/Progress.svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import type { Clarity } from '$lib/db/enums/Beverage.enum';

	const { bitterness, clarity, color, fullness, hoppyness, power, sweetness } = $derived(
		$page.data.details
	);

	function getClarity(value: Clarity) {
		return $LL.pages.details.impressions.clarity[value]();
	}
</script>

{#if bitterness || clarity || color || fullness || hoppyness || power || sweetness}
	<div class="flex flex-wrap items-end">
		{#if bitterness || fullness || hoppyness || power || sweetness}
			<dl class="flex basis-full flex-wrap lg:basis-1/2">
				{#if bitterness}
					<DT>{$LL.pages.details.impressions.bitterness()}</DT>
					<DD><Progress values={bitterness} /></DD>
				{/if}
				{#if sweetness}
					<DT>{$LL.pages.details.impressions.sweetness()}</DT>
					<DD><Progress values={sweetness} /></DD>
				{/if}
				{#if fullness}
					<DT>{$LL.pages.details.impressions.fullness()}</DT>
					<DD><Progress values={fullness} /></DD>
				{/if}
				{#if power}
					<DT>{$LL.pages.details.impressions.power()}</DT>
					<DD><Progress values={power} /></DD>
				{/if}
				{#if hoppyness}
					<DT>{$LL.pages.details.impressions.hoppyness()}</DT>
					<DD><Progress values={hoppyness} /></DD>
				{/if}
			</dl>
		{/if}
		{#if clarity || color}
			<dl class="flex basis-full flex-wrap lg:basis-1/2">
				{#if color}
					<DT>{$LL.pages.details.impressions.color()}</DT>
					<DD>
						<div style="background-color: {color.editorial}" class="inline-block h-4 w-4 rounded" />
					</DD>
				{/if}
				{#if clarity}
					<DT>{$LL.pages.details.impressions.clarity.title()}</DT>
					<DD>{getClarity(clarity.editorial)}</DD>
				{/if}
			</dl>
		{/if}
	</div>
{/if}
