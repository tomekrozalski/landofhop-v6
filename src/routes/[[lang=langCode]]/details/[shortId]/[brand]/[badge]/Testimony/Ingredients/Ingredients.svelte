<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from '../atoms/DescriptionDetails.svelte';
	import DT from '../atoms/DescriptionTerm.svelte';
	import Label from '../atoms/Label.svelte';
	import Producer from '../atoms/Producer.svelte';
	import Item from './IngredientsListItem.svelte';

	const { ingredients } = $derived($page.data.details);

	function getTitle(isComplete: boolean) {
		return isComplete
			? $LL.pages.details.testimony.ingredients()
			: $LL.pages.details.testimony.contains();
	}
</script>

{#if ingredients?.label}
	<DT>{getTitle(ingredients.label.complete)}</DT>
	<DD>
		<ul class="flex flex-wrap">
			{#each ingredients.label.list as ingredient, index}
				{@const last = index === ingredients.label.list.length - 1}
				<Item {last}><Label>{ingredient}</Label></Item>
			{/each}
		</ul>
		{#if ingredients.producer && ingredients.label?.complete === ingredients.producer?.complete}
			<ul class="flex flex-wrap">
				{#each ingredients.producer?.list as ingredient, index}
					{@const last = index === ingredients.producer?.list.length - 1}
					<Item {last}><Producer>{ingredient}</Producer></Item>
				{/each}
			</ul>
		{/if}
	</DD>
{/if}

{#if ingredients?.producer && ingredients?.label?.complete !== ingredients?.producer?.complete}
	<DT>{getTitle(ingredients.producer.complete)}</DT>
	<DD>
		<ul class="flex flex-wrap">
			{#each ingredients.producer.list as ingredient, index}
				{@const last = index === ingredients.producer.list.length - 1}
				<Item {last}><Producer>{ingredient}</Producer></Item>
			{/each}
		</ul>
	</DD>
{/if}
