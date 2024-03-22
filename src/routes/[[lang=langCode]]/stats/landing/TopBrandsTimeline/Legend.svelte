<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import type { Brand, TopBrandsTimelineBar } from '../utils/normalizers/Output.d';

	let {
		selectedBrand,
		morePopularBrandsData,
		topBrandsTimelineData
	}: {
		selectedBrand: string | null;
		morePopularBrandsData: Brand[];
		topBrandsTimelineData: TopBrandsTimelineBar[];
	} = $props();
</script>

<ol class="mb-10 ml-2 mt-6 flex flex-col gap-1 px-3 lg:mt-0 lg:flex-row lg:flex-wrap">
	{#each topBrandsTimelineData[topBrandsTimelineData.length - 1].brands as { amount, badge, id, name }, index}
		<li>
			<a
				class="flex rounded pr-2 transition-colors"
				class:text-white={id === selectedBrand}
				class:bg-red={index === 0 && id === selectedBrand}
				class:bg-orange={index === 1 && id === selectedBrand}
				class:bg-yellow={index === 2 && id === selectedBrand}
				class:bg-green={index === 3 && id === selectedBrand}
				class:bg-sea={index === 4 && id === selectedBrand}
				class:bg-turquoise={index === 5 && id === selectedBrand}
				class:bg-red-light={index === 6 && id === selectedBrand}
				class:bg-gray-600={index === 7 && id === selectedBrand}
				class:bg-gray-400={index === 8 && id === selectedBrand}
				class:bg-gray-300={index === 9 && id === selectedBrand}
				href="/brand/{id}/{badge}"
				on:mouseenter={() => (selectedBrand = id)}
				on:mouseleave={() => (selectedBrand = null)}
			>
				<i
					class="mr-2 flex items-center justify-center rounded border-r px-3 text-sm not-italic text-white"
					class:rounded-r-none={id === selectedBrand}
					class:bg-red={index === 0}
					class:bg-orange={index === 1}
					class:bg-yellow={index === 2}
					class:bg-green={index === 3}
					class:bg-sea={index === 4}
					class:bg-turquoise={index === 5}
					class:bg-red-light={index === 6}
					class:bg-gray-600={index === 7}
					class:bg-gray-400={index === 8}
					class:bg-gray-300={index === 9}
					role="presentation"
				>
					{index + 1}
				</i>
				{name.value}
				<span
					class="mb-0.5 ml-1 self-end text-sm transition-colors"
					class:text-gray-700={id !== selectedBrand}
					class:text-white={id === selectedBrand}
				>
					({amount})
				</span>
			</a>
		</li>
	{/each}
</ol>

<h3 class="m-5 font-medium">
	{$LL.pages.stats.landing.topBrandsTimeline.morePopularBrands()}
</h3>

<ul class="mx-5 flex list-inside list-disc flex-col gap-1 text-base lg:flex-row lg:flex-wrap">
	{#each morePopularBrandsData as { amount, badge, id, name }, index}
		<li>
			<a
				href="/brand/{id}/{badge}"
				class="hover:underline"
				class:pr-2={index === morePopularBrandsData.length - 1}
			>
				{name.value} <span class="text-sm">({amount})</span>
			</a>
		</li>
	{/each}
</ul>
