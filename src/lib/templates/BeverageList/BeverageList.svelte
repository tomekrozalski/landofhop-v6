<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
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
					href={$LL.link('/details/{beverage.shortId}/{beverage.brand.badge}/{beverage.badge}')}
					class="group flex w-full justify-center focus-visible:border-8 focus-visible:border-black focus-visible:outline-none"
				>
					<BrokenCoverImage type={beverage.containerType} />
				</a>
			{/if}
		</li>
	{/each}
</ul>
