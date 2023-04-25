<script lang="ts">
	import CoverImageWrapper from './CoverImageWrapper.svelte';
	// import BrokenCoverImage from './BrokenCoverImage.svelte';
	// import type { Basics } from './Basics.d';

	// export let beverages: Basics[];
	export let beverages: any[];
</script>

<ul class="beverage-list container mb-16 grid items-end justify-center gap-2 px-2 py-5">
	{#each beverages as beverage, index}
		<li class="flex pt-5">
			{#if beverage.coverImage}
				{#key beverages}
					<CoverImageWrapper {beverage} eager={index < 5} />
				{/key}
			{:else}
				<a href="/details/{beverage.shortId}/{beverage.brand.badge}/{beverage.badge}">
					BrokenCoverImage
					<!-- <BrokenCoverImage type={beverage.containerType} /> -->
				</a>
			{/if}
		</li>
	{/each}
</ul>

<style>
	/* li {

		justify-content: center;

		position: relative;

	} */

	/* a {
		width: 100%;
		text-align: center;
	} */

	/* a > :global(*) {
		transform: scale(1);
		transition: transform var(--transition-default);
	} */

	/* a:hover > :global(*) {
		transform: scale(0.9);
	} */
</style>
