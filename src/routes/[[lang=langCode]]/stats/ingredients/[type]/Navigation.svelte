<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';
	import type { Navigation } from './types.d';

	const navigation = $derived($page.data.statsData.navigation) as Navigation;
</script>

<ul class="m-5 flex flex-wrap gap-2 lg:mx-0 lg:my-2 lg:flex-nowrap">
	{#each navigation as { badge, isActive, occurrences }}
		<li class="flex-1 basis-1/3 lg:basis-full">
			<a
				class="group block p-2 text-center transition-colors hover:text-white"
				class:text-white={isActive}
				class:bg-water={badge === 'water' && isActive}
				class:hover:bg-water={badge === 'water'}
				class:bg-malt={badge === 'malt' && isActive}
				class:hover:bg-malt={badge === 'malt'}
				class:bg-hop={badge === 'hop' && isActive}
				class:hover:bg-hop={badge === 'hop'}
				class:bg-yeast={badge === 'yeast' && isActive}
				class:hover:bg-yeast={badge === 'yeast'}
				class:bg-addition={badge === 'addition' && isActive}
				class:hover:bg-addition={badge === 'addition'}
				class:bg-gray-200={!isActive}
				href="/stats/ingredients/{badge}"
			>
				{$LL.pages.stats.ingredients.type[badge]()}
				<span
					class="text-sm transition-colors group-hover:text-white"
					class:text-gray-500={!isActive}
				>
					({occurrences})
				</span>
			</a>
		</li>
	{/each}
</ul>
