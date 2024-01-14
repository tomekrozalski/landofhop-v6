<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import type { Brand, TopBrandsTimelineBar } from '../utils/normalizers/Output.d';

	export let selectedBrand: string | null;
	export let morePopularBrandsData: Brand[];
	export let topBrandsTimelineData: TopBrandsTimelineBar[];
</script>

<ol class="flex flex-col gap-1 px-3 lg:flex-row lg:flex-wrap">
	{#each topBrandsTimelineData[topBrandsTimelineData.length - 1].brands as { amount, badge, id, name }, index}
		<li style="counter-increment: item">
			<a
				class="inline-block rounded top-brands-legend-{index + 1} pr-1"
				class:highlighted={id === selectedBrand}
				href="/brand/{id}/{badge}"
				on:mouseenter={() => (selectedBrand = id)}
				on:mouseleave={() => (selectedBrand = null)}
			>
				{name.value} <span>({amount})</span>
			</a>
		</li>
	{/each}
</ol>

<h3>{$LL.pages.stats.landing.topBrandsTimeline.morePopularBrands()}</h3>

<ul class="flex list-disc flex-col gap-1 px-3 lg:flex-row lg:flex-wrap">
	{#each morePopularBrandsData as { amount, badge, id, name }, index}
		<li>
			<a
				href="/brand/{id}/{badge}"
				class="hover:underline"
				class:pr-2={index === morePopularBrandsData.length - 1}
			>
				{name.value} <span>({amount})</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul a::before {
		display: inline-block;
		content: '';
		width: 0.6rem;
		height: 0.6rem;
		margin: 0 0.8rem 0.2rem 0.2rem;
		background-color: var(--color-black);
	}

	ol a::before {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 3rem;
		margin-right: 0.4rem;
		border-radius: 0.8rem;
		content: counter(item);
		color: var(--color-white);
	}

	li:not(:last-of-type) a::after {
		content: ',';
	}

	.highlighted {
		color: var(--color-white);
	}

	.highlighted::after {
		color: transparent;
	}

	ol li:last-of-type::after {
		content: '';
		padding-right: 0.8rem;
	}

	.top-brands-legend-1.highlighted,
	.top-brands-legend-1::before {
		background-color: var(--color-brand-1);
	}

	.top-brands-legend-2.highlighted,
	.top-brands-legend-2::before {
		background-color: var(--color-brand-3);
	}

	.top-brands-legend-3.highlighted,
	.top-brands-legend-3::before {
		background-color: var(--color-brand-5);
	}

	.top-brands-legend-4.highlighted,
	.top-brands-legend-4::before {
		background-color: var(--color-brand-6);
	}

	.top-brands-legend-5.highlighted,
	.top-brands-legend-5::before {
		background-color: var(--color-brand-8);
	}

	.top-brands-legend-6.highlighted,
	.top-brands-legend-6::before {
		background-color: var(--color-brand-10);
	}

	.top-brands-legend-7.highlighted,
	.top-brands-legend-7::before {
		background-color: #555;
	}

	.top-brands-legend-8.highlighted,
	.top-brands-legend-8::before {
		background-color: #666;
	}

	.top-brands-legend-9.highlighted,
	.top-brands-legend-9::before {
		background-color: #999;
	}

	.top-brands-legend-10.highlighted,
	.top-brands-legend-10::before {
		background-color: #ccc;
	}

	span {
		font-size: 1.4rem;
		font-weight: var(--font-weight-light);
	}

	h3 {
		margin: 4rem 0 2rem 0;
		padding-left: 1rem;
		font-weight: var(--font-weight-regular);
	}

	@media (min-width: 768px) {
		/* ol,
		ul {
			flex-direction: row;
			flex-wrap: wrap;
			padding: 0 4rem;
		} */

		h3 {
			padding-left: 4rem;
		}
	}
</style>
