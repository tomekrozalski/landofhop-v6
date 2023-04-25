<script lang="ts">
	import CoverImageWrapper from './CoverImageWrapper.svelte';
	import BrokenCoverImage from './BrokenCoverImage.svelte';
	import type { Basics } from './Basics.d';

	export let beverages: Basics[];
</script>

<ul class="beverage-list container mb-16 grid items-end justify-center gap-2 px-2 py-5">
	{#each beverages as beverage, index}
		<li class="flex pt-5">
			{#if beverage.coverImage}
				{#key beverages}
					<CoverImageWrapper {beverage} eager={index < 5} />
				{/key}
			{:else}
				<a
					href="/details/{beverage.shortId}/{beverage.brand.badge}/{beverage.badge}"
					class="group flex w-full justify-center focus:border-8 focus:border-black focus:outline-none"
				>
					<BrokenCoverImage type={beverage.containerType} />
				</a>
			{/if}
		</li>
	{/each}
</ul>
