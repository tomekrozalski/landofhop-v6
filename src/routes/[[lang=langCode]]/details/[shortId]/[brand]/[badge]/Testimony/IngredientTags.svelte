<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import type LanguageValue from '$lib/db/types/LanguageValue.d';
	import type { IngredientType } from '$lib/db/enums/Beverage.enum';

	const ingredientsTags = $derived($page.data.details.ingredientsTags ?? {});
	const ingredients = $derived(
		[...(ingredientsTags.label ?? []), ...(ingredientsTags.producer ?? [])].reduce(
			(acc, curr) =>
				acc.find(
					({ badge }: { badge: string; name: LanguageValue; type: IngredientType }) =>
						badge === curr.badge
				)
					? acc
					: [...acc, curr],
			[]
		)
	);
</script>

{#if ingredients.length}
	<dt class="mt-3 after:content-[':'] lg:text-right">
		{$LL.pages.details.testimony.ingredientsByTag()}
	</dt>
	<DD>
		<ul class="mt-3 flex flex-wrap">
			{#each ingredients as { badge, name, type }}
				<li class="mb-2 mr-2">
					<a
						class="inline-block rounded px-2 py-1 text-sm font-bold text-white transition-colors"
						class:bg-water-light={type === 'water'}
						class:hover:bg-water={type === 'water'}
						class:bg-malt-light={type === 'malt'}
						class:hover:bg-malt={type === 'malt'}
						class:bg-hop-light={type === 'hop'}
						class:hover:bg-hop={type === 'hop'}
						class:bg-yeast-light={type === 'yeast'}
						class:hover:bg-yeast={type === 'yeast'}
						class:bg-addition-light={type === 'addition'}
						class:hover:bg-addition={type === 'addition'}
						href="/advanced-search?ingredientTags={badge}"
						lang={name.language && name.language !== $page.data.locale ? name.language : null}
					>
						{name.value}
					</a>
				</li>
			{/each}
		</ul>
	</DD>
{/if}
