<script lang="ts">
	import { draw } from 'svelte/transition';
	import { curveCardinal, line } from 'd3-shape';
	import type { TopBrandsTimelineBar } from '../utils/normalizers/Output.d';
	import sortData from './sortData';

	let {
		selectedBrand,
		topBrandsTimelineData,
		xScale,
		xValue,
		yScale
	}: {
		selectedBrand: string | null;
		topBrandsTimelineData: TopBrandsTimelineBar[];
		xScale: any;
		xValue: (value: any) => string;
		yScale: any;
	} = $props();

	const linePath = (id: string) => {
		type DataTypes = {
			amount: number;
			date: string;
		};

		const data: DataTypes[] = topBrandsTimelineData
			.map(({ brands, date }) => ({
				date,
				amount: brands.find((props) => props.id === id)?.amount ?? 0
			}))
			.reduce((acc: DataTypes[], { date, amount }) => {
				if (amount && acc[acc.length - 1]?.amount === 0) {
					return [acc[acc.length - 1], { date, amount }];
				}

				return [...acc, { date, amount }];
			}, []);

		return line<DataTypes>()
			.x((d) => xScale(xValue(d)) || 0)
			.y((d) => yScale(d.amount))
			.curve(curveCardinal)(data);
	};
</script>

<g style="transform: translate({Math.round(xScale.bandwidth() / 2)}px, 0">
	{#each sortData(topBrandsTimelineData) as { id, badge }, index}
		<a href="/brand/{id}/{badge}">
			<path
				class="cursor-pointer fill-none stroke-3 transition-opacity"
				class:stroke-red={index === 0}
				class:stroke-orange={index === 1}
				class:stroke-yellow={index === 2}
				class:stroke-green={index === 3}
				class:stroke-sea={index === 4}
				class:stroke-turquoise={index === 5}
				class:stroke-red-light={index === 6}
				class:stroke-gray-600={index === 7}
				class:stroke-gray-400={index === 8}
				class:stroke-gray-300={index === 9}
				class:opacity-20={selectedBrand && selectedBrand !== id}
				d={linePath(id)}
				in:draw
				on:mouseenter={() => (selectedBrand = id)}
				on:mouseleave={() => (selectedBrand = null)}
				role="presentation"
			/>
		</a>
	{/each}
</g>
