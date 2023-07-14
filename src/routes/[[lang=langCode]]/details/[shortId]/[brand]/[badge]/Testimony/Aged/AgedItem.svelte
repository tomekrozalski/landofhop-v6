<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import FormattedList from '$lib/atoms/FormattedList.svelte';
	import type {
		AgedPreviousContent,
		AgedTimeUnit,
		AgedType,
		AgedWood
	} from '$lib/db/enums/Beverage.enum';

	type Aged = {
		type?: AgedType;
		wood?: AgedWood;
		time?: {
			value: number;
			unit: AgedTimeUnit;
		};
		previousContent?: AgedPreviousContent[];
	};

	export let item: Aged;
	let { previousContent, time, type, wood } = item;

	$: console.log('type', type);
	$: console.log('wood', wood);
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
	<FormattedList mode="short" let:item data={previousContent}>
		{$LL.pages.details.testimony.aged.previousContent.content({ item })}
	</FormattedList>
{/if}
