<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import FormattedList from '$lib/atoms/FormattedList.svelte';
	import type {
		AgedPreviousContent,
		AgedTimeUnit,
		AgedType,
		AgedWood
	} from '$lib/db/enums/Beverage.enum';

	const { item } = $props<{
		item: {
			type?: AgedType;
			wood?: AgedWood;
			time?: {
				value: number;
				unit: AgedTimeUnit;
			};
			previousContent?: AgedPreviousContent[];
		};
	}>();
	const { previousContent, time, type, wood } = $derived(item);
</script>

{#if time}
	{$LL.time[time.unit](time.value)}
{/if}

{#if wood && !type}
	{$LL.pages.details.testimony.aged[wood]()}
{/if}

{#if !wood && type}
	{$LL.pages.details.testimony.aged[type].title()}
{/if}

{#if wood && type}
	{$LL.pages.details.testimony.aged[type][wood]()}
{/if}

{#if previousContent}
	{$LL.pages.details.testimony.aged.previousContent.name()}
	<FormattedList mode="short" data={previousContent}>
		{#snippet formattedList(item)}
			{$LL.pages.details.testimony.aged.previousContent.content({ item })}
		{/snippet}
	</FormattedList>
{/if}
