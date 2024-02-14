<script lang="ts">
	// import authentication from '$lib/utils/stores/authentication';
	// import FindAll from '../../elements/FindAll.svelte';
	// import UpdateButton from '../../elements/UpdateButton.svelte';
	import ToggleBox from './ToggleBox.svelte';
	import type { IngredientTree } from './types.d';

	export let data: IngredientTree[];
	export let level: number;
	export let onUpdateClick: (badge: string) => void;
</script>

<ul class="px-5">
	{#each data as { badge, name, occurrences, successors, successorsList }}
		<li
			class="relative
			before:absolute before:-left-8 before:top-4 before:inline-block before:h-px before:w-7 before:bg-gray-300
			after:absolute after:-left-8 after:-top-4 after:inline-block after:h-full after:w-px after:bg-gray-300"
		>
			{name.value}
			<span>({occurrences.withSuccessors})</span>
			<!-- <FindAll query="ingredientTags={[badge, ...(successorsList || [])]}" /> -->
			{#if occurrences.alone !== occurrences.withSuccessors}
				<ToggleBox {badge} />
			{/if}
			<!-- {#if $authentication.isLoggedIn} -->
			<!-- <UpdateButton {badge} {onUpdateClick} /> -->
			<!-- {/if} -->
			{#if successors}
				<svelte:self data={successors} level={level + 1} {onUpdateClick} />
			{/if}
		</li>
	{/each}
</ul>
