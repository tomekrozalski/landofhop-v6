<script lang="ts">
	import Item from './IngredientsListItem.svelte';

	export let ingredientList: string[];
</script>

<ul class="flex flex-wrap">
	{#each ingredientList as ingredient, index}
		{@const last = index === ingredientList.length - 1}
		<Item {last}><slot {ingredient} /></Item>
	{/each}
</ul>
