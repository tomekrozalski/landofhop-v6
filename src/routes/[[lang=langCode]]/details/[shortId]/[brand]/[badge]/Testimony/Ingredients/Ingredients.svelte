<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from '../atoms/DescriptionDetails.svelte';
	import DT from '../atoms/DescriptionTerm.svelte';
	import Label from '../atoms/Label.svelte';
	import Producer from '../atoms/Producer.svelte';
	import List from './IngredientsList.svelte';

	$: ({ ingredients } = $page.data.details);

	const getTitle = (isComplete: boolean) =>
		isComplete ? $LL.pages.details.testimony.ingredients() : $LL.pages.details.testimony.contains();
</script>

{#if ingredients?.label}
	<DT>{getTitle(ingredients.label.complete)}</DT>
	<DD>
		<List ingredientList={ingredients.label.list} let:ingredient>
			<Label>{ingredient}</Label>
		</List>
		{#if ingredients.producer && ingredients.label?.complete === ingredients.producer?.complete}
			<List ingredientList={ingredients.producer?.list} let:ingredient>
				<Producer>{ingredient}</Producer>
			</List>
		{/if}
	</DD>
{/if}

{#if ingredients?.producer && ingredients?.label?.complete !== ingredients?.producer?.complete}
	<DT>{getTitle(ingredients.producer.complete)}</DT>
	<DD>
		<List ingredientList={ingredients.producer.list} let:ingredient>
			<Producer>{ingredient}</Producer>
		</List>
	</DD>
{/if}
