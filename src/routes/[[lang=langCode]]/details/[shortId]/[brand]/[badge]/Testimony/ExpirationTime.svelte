<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import Label from './atoms/Label.svelte';
	import Producer from './atoms/Producer.svelte';
	import type { ExpirationDateUnit } from '$lib/db/enums/Beverage.enum';

	const { expirationDate } = $derived($page.data.details);

	function getTime(time: { value: number; unit: ExpirationDateUnit }) {
		return $LL.time[time.unit](time.value);
	}
</script>

{#if expirationDate}
	<DT>
		{$LL.pages.details.testimony.expirationTime()}
	</DT>
	<DD>
		{#if expirationDate.label}
			<Label>
				{getTime(expirationDate.label)}
			</Label>
		{/if}
		{#if expirationDate.producer}
			<Producer>
				{getTime(expirationDate.producer)}
			</Producer>
		{/if}
	</DD>
{/if}
