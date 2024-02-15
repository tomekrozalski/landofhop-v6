<script lang="ts">
	// import authentication from '$lib/utils/stores/authentication';
	// import FindAll from '../../elements/FindAll.svelte';
	// import UpdateButton from '../../elements/UpdateButton.svelte';
	import ToggleBox from './ToggleBox.svelte';
	import type { IngredientTree } from './types.d';

	const { data } = $props<{ data: IngredientTree[] }>();
</script>

<ul class="px-5">
	{#each data as { badge, name, occurrences, successors, successorsList }}
		{@const withSuccessors = occurrences.alone !== occurrences.withSuccessors}
		<li
			class="relative
			before:absolute before:-left-9 before:top-4 before:inline-block before:h-px before:w-7 before:bg-gray-300
			after:absolute after:-left-9 after:-top-3 after:inline-block after:h-full after:w-px after:bg-gray-300"
		>
			{#if withSuccessors}
				<span class="ml-1">{name.value}</span>
			{:else}
				{name.value}
			{/if}
			<span class="text-sm text-gray-400">({occurrences.withSuccessors})</span>
			<!-- <FindAll query="ingredientTags={[badge, ...(successorsList || [])]}" /> -->
			{#if withSuccessors}
				<ToggleBox {badge} />
			{/if}
			<!-- {#if $authentication.isLoggedIn} -->
			<!-- <UpdateButton {badge} {onUpdateClick} /> -->
			<!-- {/if} -->
			{#if successors}
				<svelte:self data={successors} />
			{/if}
		</li>
	{/each}
</ul>
